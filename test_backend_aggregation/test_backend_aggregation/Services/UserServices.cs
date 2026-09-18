using Microsoft.Extensions.Options;
using MongoDB.Driver;
using test_backend_aggregation.Models;
using test_backend_aggregation.Settings;

namespace test_backend_aggregation.Services
{
    public class UserServices
    {
        private readonly IMongoCollection<UserSchema> userSchema;

        public UserServices(IOptions<DatabaseSettings> dbSettings)
        {
            MongoClient mongo = new MongoClient(dbSettings.Value.ConnectionString);
            userSchema = mongo.GetDatabase(dbSettings.Value.DatabaseName).GetCollection<UserSchema>(dbSettings.Value.UserCollection);
        }

        public async Task CreateUser(UserSchema user) { 
            await userSchema.InsertOneAsync(user);
        }
    }
}
