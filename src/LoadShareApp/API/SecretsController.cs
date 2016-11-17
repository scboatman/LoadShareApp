using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using LoadShareApp.Models;
using LoadShareApp.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LoadShareApp.API
{
    [Route("api/[controller]")]
    public class SecretsController : Controller
    {
        private ISecretService _service;
        public SecretsController(ISecretService service)
        {
            _service = service;
        }
        // GET: api/values
        [HttpGet]
        [Authorize(Policy = "AdminOnly")]
        public IEnumerable<Location> Get()
        {
            return _service.GetAllLocations();
        }



    }
}
