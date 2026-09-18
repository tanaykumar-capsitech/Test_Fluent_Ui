using Microsoft.AspNetCore.Mvc;
using test_backend_aggregation.Models;
using test_backend_aggregation.Services;

namespace test_backend_aggregation.Controllers
{
    [ApiController]
    [Route("API/[Controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserServices userService;

        public UserController(UserServices userService)
        {
            this.userService = userService;
        }

        [HttpPost("CreateUser")]
        public async Task CreeateUser(UserSchema user)
        {
            await userService.CreateUser(user);
        }
    }
}
