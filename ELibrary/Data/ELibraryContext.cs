using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ELibrary;

namespace ELibrary.Data
{
    public class ELibraryContext : DbContext
    {
        public ELibraryContext (DbContextOptions<ELibraryContext> options)
            : base(options)
        {
        }

        public DbSet<ELibrary.Book> Book { get; set; }

        public DbSet<ELibrary.Users> Users { get; set; }
    }
}
