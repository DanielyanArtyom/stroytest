using System;
namespace DataAccess.Model;

public class RatingModel
{
	public int Id { get; set; }
	public string RatingName { get; set; }

	public List<ChatModel> Chats { get; set; } = new();
}
 
