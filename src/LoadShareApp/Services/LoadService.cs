using LoadShareApp.Models;
using LoadShareApp.REPO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoadShareApp.Services
{
    public class LoadService :ILoadService
    {
        private IGenericRepository _repo;



        //Get all Loads (called by controller Get() method)
        public IList<Load> GetAllLoads()
        {
            return _repo.Query<Load>().ToList();
        }

        //Get Single load by Id (called by the Get["{id}"](load) method)

        public Load GetLoadById(int id)
        {
            return _repo.Query<Load>().Where(l => l.Id == id).FirstOrDefault();
        }

        //Post single Load to the database (called by the Post(load) method)
        public void SaveLoad(Load load)
        {
            if (load.Id == 0)
            {
                _repo.Add(load);

            }
            else
            {
                _repo.Update(load);
            }
        }

        //Delete single load form the database(called by the Delete(load) method)

        public void DeleteLoad(int id)
        {
            Load loadToDelete = _repo.Query<Load>().Where(m => m.Id == id).FirstOrDefault();
            _repo.Delete(loadToDelete);
        }

        public List<Load> SearchByOrigin(string searchTerm)
        {
            var loads = _repo.Query<Load>();//we will search for Origin based on giving a field value(ie Name)
            return (from l in loads
                    where l.Origin == searchTerm
                    select new Load
                    {
                        Id = l.Id,
                        Origin = l.Origin,
                    }).ToList();
        }

        //public IList<Truck> GetAllTLoad()
        //{
        //    throw new NotImplementedException();
        //}
        public LoadService(IGenericRepository repo)
        {
            _repo = repo;
        }
    }
}
