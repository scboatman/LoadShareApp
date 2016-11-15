using LoadShareApp.Models;
using LoadShareApp.REPO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoadShareApp.Services
{
    public class LoadDetailService : ILoadDetailService
    {
        private IGenericRepository _repo;

        public LoadDetailService(IGenericRepository repo)
        {
            _repo = repo;
        }


        //Get all loads (called by controller Get() method)
        public IList<LoadDetail> GetAllLoadDetails()
        {
            return _repo.Query<LoadDetail>().ToList();
        }

        //Get Single loadDetail by Id (called by the Get["{id}"](loadDetail) method)

        public LoadDetail GetLoadDetailById(int id)
        {
            return _repo.Query<LoadDetail>().Where(l => l.Id == id).FirstOrDefault();
        }

        //Post single truck to the database (called by the Post(movie) method)
        public void SaveLoadDetail(LoadDetail loadDetail)
        {
            if (loadDetail.Id == 0)
            {
                _repo.Add(loadDetail);

            }
            else
            {
                _repo.Update(loadDetail);
            }
        }

        //Delete single truck form the database(called by the Delete(truck) method)

        public void DeleteLoadDetail(int id)
        {
            LoadDetail loadDetailToDelete = _repo.Query<LoadDetail>().Where(l => l.Id == id).FirstOrDefault();
            _repo.Delete(loadDetailToDelete);
        }

        public List<LoadDetail> SearchByOrigin(string searchTerm)
        {
            var loads = _repo.Query<LoadDetail>();//we will search for Origin based on giving a field value(ie Namae)
            return (from l in loads
                    where l.Origin == searchTerm
                    select new LoadDetail
                    {
                        Id = l.Id,
                        Origin = l.Origin,
                    }).ToList();
        }

        //public IList<Truck> GetAllTrucks()
        //{
        //    throw new NotImplementedException();
        //}

    }
}
