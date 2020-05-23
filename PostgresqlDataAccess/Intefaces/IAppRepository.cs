using PostgresqlDataAccess.Models;
using System.Threading.Tasks;

namespace PostgresqlDataAccess
{
    /// <summary>
    /// Интерфейс взаимодействия с БД
    /// </summary>
    public interface IAppRepository
    {
        /// <summary>
        /// Зарегистрировать пользователя
        /// </summary>
        /// <param name="name">И</param>
        /// <returns></returns>
        int RegistrfUser(string name);

        /// <summary>
        /// Добавление точки
        /// </summary>
        /// <param name="point">Точка</param>
        /// <returns></returns>
        Task<Point> AddPoint(Point point);

        /// <summary>
        /// Удаление точки
        /// </summary>
        /// <param name="id">идентификатор точки</param>
        void DeletePoint(int id);

        /// <summary>
        /// Записать действие пользователя
        /// </summary>
        /// <param name="userAction">Действие</param>
        void AddUserAction(UserAction userAction);

        /// <summary>
        /// Удалить действие пользователя
        /// </summary>
        /// <param name="userAction">Действие</param>
        void DeleteUserAction(UserAction userAction);

        /// <summary>
        /// Получить количество записанных дейчтвий
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        int CountUserActions(int userId);
    }
}