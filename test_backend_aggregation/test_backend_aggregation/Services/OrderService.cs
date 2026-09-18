using Microsoft.Extensions.Options;
using MongoDB.Driver;
using test_backend_aggregation.DTOs;
using test_backend_aggregation.Models;
using test_backend_aggregation.Settings;
using static test_backend_aggregation.Enum.Enums;

namespace test_backend_aggregation.Services
{
    public class OrderService
    {
        private readonly IMongoCollection<OrderSchema> orderSchema;

        public OrderService(IOptions<DatabaseSettings> dbSettings)
        {
            MongoClient mongo = new MongoClient(dbSettings.Value.ConnectionString);
            orderSchema = mongo.GetDatabase(dbSettings.Value.DatabaseName).GetCollection<OrderSchema>(dbSettings.Value.OrderCollection);
        }

        public async Task CreateOrder(CreateOrderDTO orderRequest)
        {
            OrderSchema order = new OrderSchema();
            
            order.UserId = orderRequest.UserId;
            order.Date = DateTime.UtcNow;
            order.Items = orderRequest.Items;
            for (int i = 0; i < orderRequest.Items.Count; i++)
            {
                order.TotalAmount += orderRequest.Items[i].Quantity * orderRequest.Items[i].Price;
            }
            order.Status = OrderStatus.Placed;

            await orderSchema.InsertOneAsync(order);
        }

        public async Task GetAllDeleveredOrder(string userId, OrderStatus status)
        {
            var filter = Builders<OrderSchema>.Filter.And(
                    Builders<OrderSchema>.Filter.Eq(or => or.UserId, userId),
                    Builders<OrderSchema>.Filter.Eq(or => or.Status, status)
                );

            var res = await orderSchema.Aggregate().Match(filter).ToListAsync();
        }
    }
}
