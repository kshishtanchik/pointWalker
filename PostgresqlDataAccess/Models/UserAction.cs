using PostgresqlDataAccess.common;
using PostgresqlDataAccess.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace PostgresqlDataAccess.Models
{
    /// <summary>
    /// Пользовательское действие
    /// </summary>
    public class UserAction:BaseModel
    {
        public int UserId { get; set; }
        /// <summary>
        /// Пользователь
        /// </summary>
        public User User { get; set; }

        /// <summary>
        /// Тип действия
        /// </summary>
        public ActionType ActionType { get; set; }

        /// <summary>
        /// Статус выполнения действия
        /// </summary>
        public Status ActionStatus{ get; set; }

        /// <summary>
        /// Сообщение, если есть
        /// </summary>
        public string Message { get; set; }

    }
}
