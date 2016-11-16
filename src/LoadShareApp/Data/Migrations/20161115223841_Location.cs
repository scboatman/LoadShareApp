using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LoadShareApp.Data.Migrations
{
    public partial class Location : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.Id);
                });

            migrationBuilder.AddColumn<int>(
                name: "OriginsId",
                table: "Trucks",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OriginsId",
                table: "Loads",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Trucks_OriginsId",
                table: "Trucks",
                column: "OriginsId");

            migrationBuilder.CreateIndex(
                name: "IX_Loads_OriginsId",
                table: "Loads",
                column: "OriginsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Loads_Locations_OriginsId",
                table: "Loads",
                column: "OriginsId",
                principalTable: "Locations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Trucks_Locations_OriginsId",
                table: "Trucks",
                column: "OriginsId",
                principalTable: "Locations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Loads_Locations_OriginsId",
                table: "Loads");

            migrationBuilder.DropForeignKey(
                name: "FK_Trucks_Locations_OriginsId",
                table: "Trucks");

            migrationBuilder.DropIndex(
                name: "IX_Trucks_OriginsId",
                table: "Trucks");

            migrationBuilder.DropIndex(
                name: "IX_Loads_OriginsId",
                table: "Loads");

            migrationBuilder.DropColumn(
                name: "OriginsId",
                table: "Trucks");

            migrationBuilder.DropColumn(
                name: "OriginsId",
                table: "Loads");

            migrationBuilder.DropTable(
                name: "Locations");
        }
    }
}
