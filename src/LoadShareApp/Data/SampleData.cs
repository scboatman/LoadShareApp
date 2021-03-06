using System;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Threading.Tasks;
using LoadShareApp.Models;

namespace LoadShareApp.Data
{
    public class SampleData
    {
        public async static Task Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetService<ApplicationDbContext>();
            var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();

            // Ensure db
            context.Database.EnsureCreated();

            //Ensure Mr. Boatman (isAdmin)
            var stephenB = await userManager.FindByNameAsync("Stephen C. Boatman");
            if (stephenB == null)
            {
                stephenB = new ApplicationUser
                {
                    FirstName   = "Stephen",
                    LastName ="Boatman",
                    UserName = "scboatman",
                    Email = "scboatman@outlook.com"
                };

                await userManager.CreateAsync(stephenB, "Viper133!");

                await userManager.AddClaimAsync(stephenB, new Claim("IsAdmin", "true"));

            }

            // Ensure Stephen (IsAdmin)
            var stephen = await userManager.FindByNameAsync("Stephen.Walther@CoderCamps.com");
            if (stephen == null)
            {
                // create user
                stephen = new ApplicationUser
                {
                    FirstName = "Stephen",
                    LastName =  "Walthers",
                    UserName = "Stephen.Walther@CoderCamps.com",
                    Email = "Stephen.Walther@CoderCamps.com"
                };
                await userManager.CreateAsync(stephen, "Secret123!");

                // add claims
                await userManager.AddClaimAsync(stephen, new Claim("IsAdmin", "true"));
            }

            // Ensure Mike (not IsAdmin)
            var mike = await userManager.FindByNameAsync("Mike@CoderCamps.com");
            if (mike == null)
            {
                // create user
                mike = new ApplicationUser
                {
                    FirstName = "Mike",
                    LastName = "Coder",
                    UserName = "Mike@CoderCamps.com",
                    Email = "Mike@CoderCamps.com"
                };
                await userManager.CreateAsync(mike, "Secret123!");
            }


        }

    }
}
