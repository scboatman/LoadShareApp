using System.Collections.Generic;
using LoadShareApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoadShareApp.Controllers
{
    public interface ILoadsController
    {
        IActionResult Delete(int id);
        IEnumerable<Load> Get();
        IActionResult Get(int id);
        IActionResult Post([FromBody] Load load);
    }
}