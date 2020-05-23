using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pointWalker.models
{
    /// <summary>
    /// Модель сообщения от полььзователя
    /// </summary>
    public class PointMessage
    {
        //user:nick,point:{id:points.length, xPos: 111, yPos: 222}}
        public string nick { get; set; }
        public int id { get; set;  }
        public int xPos { get; set; }
        public int yPos { get; set; }
    }
}
