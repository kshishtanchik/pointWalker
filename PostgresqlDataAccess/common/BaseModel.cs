using System;

namespace PostgresqlDataAccess.common
{
    /// <summary>
    /// Базовая модель
    /// </summary>
    public class BaseModel
    {
        public BaseModel()
        {
            CreateDate = DateTime.Now;
        }

        /// <summary>
        /// Идентификатор
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Дата создания
        /// </summary>
        public DateTime CreateDate { get; set; }
    }
}
