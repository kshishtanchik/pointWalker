using Microsoft.EntityFrameworkCore;
using PostgresqlDataAccess.Context;
using PostgresqlDataAccess.Models;
using System.Linq;
using System.Threading.Tasks;

namespace PostgresqlDataAccess
{
    public class AppRepository:IAppRepository
    {
        /// <summary>
        /// БД приложения
        /// </summary>
        private readonly AppDbContext Db;
        public AppRepository(AppDbContext appDb)
        {
            if (appDb is null)
            {
                throw new System.ArgumentNullException(nameof(appDb));
            }
            Db = appDb;
        }

        public int RegistrfUser(string name)
        {
            var newUser = new User(name);
            var saveRusult =  Db.Users.AddAsync(newUser);
            var id = (int)saveRusult.Result.Property("id").OriginalValue;
            Db.SaveChangesAsync();
            return id;
        }
        
        public async Task<Point> AddPoint(Point point)
        {
            var saveRusult =await Db.Points.AddAsync(point);
            await Db.SaveChangesAsync();
            return saveRusult.Entity;
        }

        public void DeletePoint(int id)
        {
            var deletedPoint = Db.Points.FirstOrDefault(x=>x.Id==id);
              Db.Points.Remove(deletedPoint);
            Db.SaveChangesAsync();
        }

        public void AddUserAction(UserAction userAction)
        {
            Db.UserActions.Add(userAction);
            Db.SaveChangesAsync();
        }
        public void DeleteUserAction(UserAction userAction)
        {
            Db.UserActions.Remove(userAction);
            Db.SaveChangesAsync();
        }

        public int CountUserActions(int userId)
        {
            return Db.UserActions.Where(x => x.User.Id == userId).Count();
        }
    }
}
