using AhGarra.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Repositories.Impl.Context
{
  public class ApplicationContext : DbContext
  {
    public DbSet<Card> Cards { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<Options> Options { get; set; }
    public DbSet<Quiz> Quizes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      //optionsBuilder..UseInMemoryDatabase(); // Deal with this
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      //builder.ApplyConfiguration(new FilmeMap());
    }

    public void SeedData()
    {
      CargaSistema();
    }

    public void CargaSistema()
    {

    }
  }
}
