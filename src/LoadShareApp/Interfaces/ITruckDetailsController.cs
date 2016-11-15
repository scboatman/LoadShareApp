using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace LoadShareApp.Controllers
{
    public interface ITruckDetailsController
    {
        void Delete(int id);
        IEnumerable<string> Get();
        string Get(int id);
        void Post([FromBody] string value);
        void Put(int id, [FromBody] string value);
    }
}