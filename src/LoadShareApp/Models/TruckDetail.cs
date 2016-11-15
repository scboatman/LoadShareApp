using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoadShareApp.Models
{
    public class TruckDetail
    {
        public int Id { get; set; }
        public string Origin { get; set; }
        public string OriginState { get; set; }
        public string Destination { get; set; }
        public string DestinationState { get; set; }
        public string TrailerType { get; set; }
        public string ShipDate { get; set; }
        public string Company { get; set; }
    }
}
