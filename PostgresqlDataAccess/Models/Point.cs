using PostgresqlDataAccess.common;
using System;
using System.Collections.Generic;
using System.Text;

namespace PostgresqlDataAccess.Models
{
    /// <summary>
    /// Модель точки
    /// </summary>
   public class Point:BaseModel
    {
        public Point(int x, int y)
        {
            X = x;
            Y = y;
        }
        public int X { get; set; }
        public int Y { get; set; }
        public int UserId { get; set; }
        /// <summary>
        /// Пользователь
        /// </summary>
        public User User { get; set; }
    }
}
