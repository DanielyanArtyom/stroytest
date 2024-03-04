using System;
using System.Numerics;
using DataAccess.Model;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.DataAccess;

public class DataContext: DbContext
{

    public DataContext(DbContextOptions<DataContext> options) : base(options)
	{
	}

    public DbSet<AgentModel> Agents { get; set; }
    public DbSet<ChatModel> Chats { get; set; }
    public DbSet<RatingModel> Ratings { get; set; }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ChatModel>()
            .HasOne(c => c.Agent)
            .WithMany(a => a.Chats)
            .HasForeignKey(c => c.AgentId);

        modelBuilder.Entity<ChatModel>()
           .HasOne(c => c.Rating)
           .WithMany(r => r.Chats)
           .HasForeignKey(c => c.RatingId);

    }
}

