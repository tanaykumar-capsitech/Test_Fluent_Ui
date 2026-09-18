using Microsoft.AspNetCore.Mvc;
using test_backend_aggregation.Models;
using test_backend_aggregation.Services;

namespace test_backend_aggregation.Controllers
{
    [ApiController]
    [Route("API/[Controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService productService;

        public ProductController(ProductService productService)
        {
            this.productService = productService;
        }

        [HttpPost("CreateProduct")]
        public async Task CreateProduct(ProductSchema product)
        {
            await productService.CreateProduct(product);
        }
    }
}
