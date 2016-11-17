using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LoadShareApp.Data.Migrations
{
    public partial class onetomany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "Destination",
                table: "Locations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Origin",
                table: "Locations",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LocationsId",
                table: "Loads",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Loads_LocationsId",
                table: "Loads",
                column: "LocationsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Loads_Locations_LocationsId",
                table: "Loads",
                column: "LocationsId",
                principalTable: "Locations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Loads_Locations_LocationsId",
                table: "Loads");

            migrationBuilder.DropIndex(
                name: "IX_Loads_LocationsId",
                table: "Loads");

            migrationBuilder.DropColumn(
                name: "Destination",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "Origin",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "LocationsId",
                table: "Loads");

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
    }
}
