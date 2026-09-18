using MongoDB.Bson.Serialization.Attributes;

namespace test_backend_aggregation.Models
{
    public class UserSchema
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
