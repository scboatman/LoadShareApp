using System.Linq;

namespace LoadShareApp.REPO
{
    public interface IGenericRepository
    {
        void Add<T>(T entityToCreate) where T : class;
        void Delete<T>(T entityToDelete) where T : class;
        void Dipose();
        IQueryable<T> Query<T>() where T : class;
        void SaveChanges();
        IQueryable<T> SqlQuery<T>(string sql, params object[] parameters) where T : class;
        void Update<T>(T entityToUpdate) where T : class;
    }
}