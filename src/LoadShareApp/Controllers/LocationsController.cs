using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoadShareApp.Data;
using LoadShareApp.Models;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LoadShareApp.Controllers
{
    
    [Route("api/[controller]")]
    public class LocationsController : Controller
    {
        private ApplicationDbContext _db;
        public  LocationsController(ApplicationDbContext db)
        {
            this._db = db;
        }
        //Get: api/values
        [HttpGet]
        [Authorize(Policy = "AdminOnly")]

        //get all loads and the locations associated with them
        public IEnumerable<Location> Get()
        {
            var locations = (from c in _db.Locations
                              select new Location
                              {
                                  Name = c.Name,
                                  Loads = (from l in c.Loads
                                            select new Load
                                            {
                                                Origin = l.Origin,
                                                Destination = l.Destination,
                                            }).ToList()
                              }).ToList();
            return locations;
        }
    }
}
