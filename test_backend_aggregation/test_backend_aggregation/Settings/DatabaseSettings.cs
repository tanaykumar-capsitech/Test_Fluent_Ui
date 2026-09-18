using MongoDB.Bson.Serialization.Attributes;

namespace test_backend_aggregation.Settings
{
    public class DatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public string UserCollection { get; set; }
        public string ProductCollection { get; set; }
        public string OrderCollection { get; set; }
    }
}
