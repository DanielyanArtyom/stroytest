using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StroyTestTask.Migrations
{
    /// <inheritdoc />
    public partial class updatemodels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TagsCount",
                table: "Agents");

            migrationBuilder.AddColumn<int>(
                name: "ResponseTime",
                table: "Chats",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TagsCount",
                table: "Chats",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ResponseTime",
                table: "Chats");

            migrationBuilder.DropColumn(
                name: "TagsCount",
                table: "Chats");

            migrationBuilder.AddColumn<int>(
                name: "TagsCount",
                table: "Agents",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
