using System.Collections.Generic;
using LoadShareApp.Models;

namespace LoadShareApp.Services
{
    public interface ISecretService
    {
        IList<Location> GetAllLocations();
    }
}