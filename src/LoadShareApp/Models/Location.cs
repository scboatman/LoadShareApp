﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoadShareApp.Models
{
    public class Location
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Load> Loads { get; set; }
        public string Origin { get; internal set; }
        public string Destination { get; internal set; }
    }
}
