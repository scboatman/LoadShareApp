using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoadShareApp.Services;
using LoadShareApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LoadShareApp.Controllers
{
    [Route("api/[controller]")]
    public class LoadsController : Controller
    {
        private ILoadService _service;


        // GET: api/values
        [HttpGet]
        public IEnumerable<Load> Get()
        {
            return _service.GetAllLoads();
        }

        // GET a load by id
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_service.GetLoadById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody]Load load)
        {
            _service.SaveLoad(load);
            return Ok(load);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.DeleteLoad(id);
            return Ok();
        }

        public LoadsController(ILoadService service)
        {
            this._service = service;
        }

    }
}
