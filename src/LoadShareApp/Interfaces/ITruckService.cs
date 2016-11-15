using System.Collections.Generic;
using LoadShareApp.Models;

namespace LoadShareApp.Services
{
    public interface ITruckService
    {
        void DeleteTruck(int id);
        IList<Truck> GetAllTrucks();
        Truck GetTruckById(int id);
        void SaveTruck(Truck truck);
        List<Truck> SearchByOrigin(string searchTerm);
    }
}