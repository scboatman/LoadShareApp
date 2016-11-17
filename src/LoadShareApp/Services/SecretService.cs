using LoadShareApp.Models;
using LoadShareApp.REPO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoadShareApp.Services
{
    public class SecretService : ISecretService
    {
        private IGenericRepository _repo;



        //Get all Locationss (called by controller Get() method)
        public IList<Location> GetAllLocations()
        {
            return _repo.Query<Location>().ToList();
        }

    }
}
