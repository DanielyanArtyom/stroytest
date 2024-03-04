namespace DataAccess.Model;

public class AgentModel
{
    public int Id { get; set; }
    public string Name { get; set; }

    public List<ChatModel> Chats { get; set; } = new();
}

