using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoadShareApp.Data;
using LoadShareApp.Models;
using Microsoft.AspNetCore.Authorization;
using LoadShareApp.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LoadShareApp.Controllers
{
    
    [Route("api/[controller]")]
    public class LocationsController : Controller
    {
        private ILocationService _service;
        public  LocationsController(ILocationService service)
        {
            this._service = service;
        }
        //Get: api/values
        [HttpGet]
        [Authorize(Policy = "AdminOnly")]

        //get all loads and the locations associated with them
        public IEnumerable<Location> Get()
        {
            return this._service.GetAllLocations();
           
        }
    }
}
