using Microsoft.AspNetCore.Mvc;
using test_backend_aggregation.DTOs;
using test_backend_aggregation.Services;

namespace test_backend_aggregation.Controllers
{
    [ApiController]
    [Route("API/[Controller]")]
    public class OrderController : ControllerBase
    {
        private readonly OrderService orderService;

        public OrderController(OrderService orderService)
        {
            this.orderService = orderService;       
        }

        [HttpPost("PaceOrder")]
        public async Task PLaceOrder(CreateOrderDTO order)
        {
            await orderService.CreateOrder(order);
        }
    }
}
