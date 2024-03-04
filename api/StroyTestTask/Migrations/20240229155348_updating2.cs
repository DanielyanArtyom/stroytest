using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StroyTestTask.Migrations
{
    /// <inheritdoc />
    public partial class updating2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Chats_RatingId",
                table: "Chats");

            migrationBuilder.CreateIndex(
                name: "IX_Chats_RatingId",
                table: "Chats",
                column: "RatingId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Chats_RatingId",
                table: "Chats");

            migrationBuilder.CreateIndex(
                name: "IX_Chats_RatingId",
                table: "Chats",
                column: "RatingId",
                unique: true);
        }
    }
}
