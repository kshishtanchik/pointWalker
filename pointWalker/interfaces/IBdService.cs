using PostgresqlDataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pointWalker.interfaces
{
    public interface IBdService
    {
        Point AddPoint(Point point);
    }
}
