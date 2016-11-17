using System.Collections.Generic;
using LoadShareApp.Models;

namespace LoadShareApp.Services
{
    public interface ILocationService
    {
        void DeleteLocation(int id);
        IList<Location> GetAllLocations();
        Location GetLoadById(int id);
        void SaveLoad(Location location);
        List<Location> SearchByOrigin(string searchTerm);
    }
}