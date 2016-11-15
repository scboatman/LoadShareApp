using System.Collections.Generic;
using LoadShareApp.Models;

namespace LoadShareApp.Services
{
    public interface ITruckDetailService
    {
        void DeleteTruckDetail(int id);
        IList<TruckDetail> GetAllTruckDetails();
        TruckDetail GetTruckDetailById(int id);
        void SaveTruckDetail(TruckDetail truckDetail);
        List<TruckDetail> SearchByOrigin(string searchTerm);
    }
}