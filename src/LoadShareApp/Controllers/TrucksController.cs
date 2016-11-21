using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoadShareApp.Models;
using LoadShareApp.Services;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LoadShareApp.Controllers
{
    [Route("api/[controller]")]
    public class TrucksController : Controller
    {
        private ITruckService _service;



        // GET all trucks
        [HttpGet]
        public IEnumerable<Truck> Get()
        {
            return _service.GetAllTrucks();
        }

        // GET a truck by Id
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_service.GetTruckById(id));
        }

        //add a truck or update an existing truck
        [HttpPost]
        public IActionResult Post([FromBody]Truck truck)
        {
            _service.SaveTruck(truck);
            return Ok(truck);
        }

        [HttpDelete("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public IActionResult Delete(int id)
        {

            _service.DeleteTruck(id);

            return Ok();
        }

        //constructor utilizing depandency injection
        public TrucksController(ITruckService service)
        {
            this._service = service;
        }

    }
}
