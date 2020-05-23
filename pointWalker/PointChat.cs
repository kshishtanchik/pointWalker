using Microsoft.AspNetCore.SignalR;
using pointWalker.interfaces;
using pointWalker.models;
using pointWalker.services;
using PostgresqlDataAccess.Models;
using System.Threading.Tasks;

namespace pointWalker
{
    public class PointChat:Hub
    {
        private readonly IBdService bdService;

        public PointChat(IBdService bdService)
        {
            this.bdService = bdService ?? throw new System.ArgumentNullException(nameof(bdService));
        }
        public async Task sendToAll(PointMessage message)            
        {
            var newPoint = new Point(message.xPos, message.yPos);
            var addedPoint=bdService.AddPoint(newPoint);
            message.id = addedPoint.Id;
            await Clients.All.SendAsync("sendToAll", message);
        }
    }
}
