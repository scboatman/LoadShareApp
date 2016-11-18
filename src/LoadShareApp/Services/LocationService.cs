using LoadShareApp.Models;
using LoadShareApp.REPO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoadShareApp.Services
{
    public class LocationService : ILocationService
    {
        private IGenericRepository _repo;

        //Get all Loads (called by controller Get() method)
        public List<Location> GetAllLocations()
        {
            return _repo.Query<Location>().ToList();
        }

        //Get Single locationby Id (called by the Get["{id}"](location) method)

        public Location GetLoadById(int id)
        {
            return _repo.Query<Location>().Where(l => l.Id == id).FirstOrDefault();
        }

        //Post single Location to the database (called by the Post(load) method)
        public void SaveLoad(Location location)
        {
            if (location.Id == 0)
            {
                _repo.Add(location);

            }
            else
            {
                _repo.Update(location);
            }
        }

        //Delete single location form the database(called by the Delete(location) method)

        public void DeleteLocation(int id)
        {
            Location locationToDelete = _repo.Query<Location>().Where(m => m.Id == id).FirstOrDefault();
            _repo.Delete(locationToDelete);
        }

        public List<Location> SearchByOrigin(string searchTerm)
        {
            var locations = _repo.Query<Location>();//we will search for Origin based on giving a field value(ie Name)
            return (from l in locations
                    where l.Origin == searchTerm
                    select new Location
                    {
                        Id = l.Id,
                        Origin = l.Origin,
                    }).ToList();
        }

        //public IList<Truck> GetAllTLocation()
        //{
        //    throw new NotImplementedException();
        //}
        public LocationService(IGenericRepository repo)
        {
            _repo = repo;
        }
    }
}
