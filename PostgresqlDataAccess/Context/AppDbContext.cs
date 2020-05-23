using Microsoft.EntityFrameworkCore;
using PostgresqlDataAccess.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PostgresqlDataAccess.Context
{
    /// <summary>
    /// Контекст данных приложения
    /// </summary>
    public class AppDbContext : DbContext
    {
        public AppDbContext()
        {
            Database.EnsureCreated();
        }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        /// <summary>
        /// Пользовательские действия
        /// </summary>
        public DbSet<UserAction> UserActions { get; set; }

        /// <summary>
        /// Маркеры
        /// </summary>
        public DbSet<Point> Points { get; set; }

        /// <summary>
        /// Пользователи
        /// </summary>
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserAction>()
                .HasOne(u => u.User)
                .WithMany(a => a.UserActions)
                .HasForeignKey(k => k.UserId);

            modelBuilder.Entity<Point>()
                .HasOne(u => u.User)
                .WithMany(m => m.Points)
                .HasForeignKey(k => k.UserId);
        }
    }
}
