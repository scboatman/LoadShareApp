using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoadShareApp.Models;
using LoadShareApp.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LoadShareApp.Controllers
{
    [Route("api/[controller]")]
    public class LoadDetailsController : Controller
    {
        private Services.ILoadDetailService _service;

        // GET all trucks
        [HttpGet]
        public IEnumerable<LoadDetail> Get()
        {
            return _service.GetAllLoadDetails();
        }

        // GET a loadDetail by Id
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_service.GetLoadDetailById(id));
        }

        //add a loadDetail or update an existing load
        [HttpPost]
        public IActionResult Post([FromBody]LoadDetail LoadDetail)
        {
            LoadDetail loadDetail = null;
            _service.SaveLoadDetail(loadDetail);
            return Ok(loadDetail);
        }



        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            _service.DeleteLoadDetail(id);

            return Ok();
        }

        //constructor utilizing depandency injection
        LoadDetailsController(ILoadDetailService service)
        {
            this._service = service;
        }
    }
}
