using System.Collections.Generic;
using LoadShareApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoadShareApp.Controllers
{
    public interface ILoadDetailsController
    {
        IActionResult Delete(int id);
        IEnumerable<LoadDetail> Get();
        IActionResult Get(int id);
        IActionResult Post([FromBody] LoadDetail LoadDetail);
    }
}