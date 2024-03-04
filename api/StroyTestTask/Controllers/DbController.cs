using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.DataAccess;
using Microsoft.AspNetCore.Mvc;
using StroyTestTask.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StroyTestTask.Controllers
{
    public class DbController : Controller
    {
        private DataContext _db;

        public DbController(DataContext db)
        {
            this._db = db;
        }


        [HttpGet("GenerateDb")]
        public void Update()
        {
            var generator = new GenerateDb(this._db);

            generator.Generate();

        }
    }
}

