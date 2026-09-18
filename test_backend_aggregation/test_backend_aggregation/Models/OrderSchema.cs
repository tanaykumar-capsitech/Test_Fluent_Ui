using MongoDB.Bson.Serialization.Attributes;
using static test_backend_aggregation.Enum.Enums;

namespace test_backend_aggregation.Models
{
    public class OrderSchema
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; }
        public string UserId { get; set; }
        public DateTime Date {  get; set; }
        public List<OrderItemSchema> Items { get; set; }
        public double TotalAmount { get; set; }
        public OrderStatus Status { get; set; }
    }

    public class OrderItemSchema
    {
        public string ProductId { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
    }
}
