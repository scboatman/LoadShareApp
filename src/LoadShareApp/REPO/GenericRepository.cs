using LoadShareApp.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoadShareApp.REPO
{
    public class GenericRepository :IGenericRepository
    {
        private ApplicationDbContext _db;

        public GenericRepository(ApplicationDbContext db)
        {
            this._db = db;
        }

        //Goes and gets a table of the class and makes it queriable
        public IQueryable<T> Query<T>() where T : class// "T" must be a class
        {
            return _db.Set<T>().AsQueryable();

        }
        //Creates and adds to the db
        public void Add<T>(T entityToCreate) where T : class
        {
            _db.Set<T>().Add(entityToCreate);
            _db.SaveChanges();
        }

        //Updates the db
        public void Update<T>(T entityToUpdate) where T : class
        {
            _db.Set<T>().Update(entityToUpdate);
            _db.SaveChanges();
        }

        //deletes from db
        public void Delete<T>(T entityToDelete) where T : class
        {
            _db.Set<T>().Remove(entityToDelete);
            _db.SaveChanges();
        }

        public IQueryable<T> SqlQuery<T>(string sql, params object[] parameters) where T : class
        {
            return _db.Set<T>().FromSql(sql, parameters);
        }

        public void SaveChanges()
        {
            _db.SaveChanges();
        }

        public void Dipose()
        {
            _db.Dispose();
        }

    }
}
