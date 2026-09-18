using test_backend_aggregation.Models;

namespace test_backend_aggregation.DTOs
{
    public class CreateOrderDTO
    {
        public string UserId { get; set; }
        public List<OrderItemSchema> Items { get; set; }
    }
}
