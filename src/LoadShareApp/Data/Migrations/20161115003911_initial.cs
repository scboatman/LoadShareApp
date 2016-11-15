using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LoadShareApp.Data.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Loads",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Age = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    Destination = table.Column<string>(nullable: true),
                    DestinationState = table.Column<string>(nullable: true),
                    Length = table.Column<int>(nullable: false),
                    LoadSize = table.Column<string>(nullable: true),
                    Miles = table.Column<decimal>(nullable: false),
                    Origin = table.Column<string>(nullable: true),
                    OriginState = table.Column<string>(nullable: true),
                    PayRate = table.Column<decimal>(nullable: false),
                    ShipDate = table.Column<string>(nullable: true),
                    TrailerType = table.Column<string>(nullable: true),
                    Weight = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loads", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Trucks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Company = table.Column<string>(nullable: true),
                    Destination = table.Column<string>(nullable: true),
                    DestinationState = table.Column<string>(nullable: true),
                    Origin = table.Column<string>(nullable: true),
                    OriginState = table.Column<string>(nullable: true),
                    ShipDate = table.Column<string>(nullable: true),
                    TrailerType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trucks", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Loads");

            migrationBuilder.DropTable(
                name: "Trucks");
        }
    }
}
