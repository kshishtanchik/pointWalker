using pointWalker.interfaces;
using PostgresqlDataAccess;
using PostgresqlDataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pointWalker.services
{
    public class BdService : IBdService
    {
        private readonly IAppRepository repository;

        public BdService(IAppRepository repository)
        {
            this.repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }
        public Point AddPoint(Point point)
        {
            return repository.AddPoint(point).Result;
        }
    }
}
