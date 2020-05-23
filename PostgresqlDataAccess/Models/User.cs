using PostgresqlDataAccess.common;
using System;
using System.Collections.Generic;
using System.Text;

namespace PostgresqlDataAccess.Models
{
    /// <summary>
    /// Пользователь
    /// </summary>
    public class User:BaseModel
    {
        public User(string name):base()
        {
            Name = name;
        }

        /// <summary>
        /// Имя пользователя
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Маркеры пользователя
        /// </summary>
        public List<Point> Points { get; set; }

        public List<UserAction>UserActions { get; set; }
    }
}
