using System.Collections.Generic;
using LoadShareApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoadShareApp.Controllers
{
    public interface ITrucksController
    {
        IActionResult Delete(int id);
        IEnumerable<Truck> Get();
        IActionResult Get(int id);
        IActionResult Post([FromBody] Truck truck);
    }
}