using System.Collections.Generic;
using LoadShareApp.Models;

namespace LoadShareApp.API
{
    public interface ISecretsController
    {
        IEnumerable<Location> Get();
    }
}