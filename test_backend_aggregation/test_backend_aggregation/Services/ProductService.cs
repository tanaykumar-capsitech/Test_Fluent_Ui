using Microsoft.Extensions.Options;
using MongoDB.Driver;
using test_backend_aggregation.Models;
using test_backend_aggregation.Settings;

namespace test_backend_aggregation.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<ProductSchema> productSchema;

        public ProductService(IOptions<DatabaseSettings> dbSettings)
        {
            MongoClient mongo = new MongoClient(dbSettings.Value.ConnectionString);
            productSchema = mongo.GetDatabase(dbSettings.Value.DatabaseName).GetCollection<ProductSchema>(dbSettings.Value.ProductCollection);
        }

        public async Task CreateProduct(ProductSchema product)
        {
            await productSchema.InsertOneAsync(product);
        }
    }
}
