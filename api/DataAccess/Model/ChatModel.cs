using System;
namespace DataAccess.Model;

public class ChatModel
{
    public int Id { get; set; }
    public DateOnly Date { get; set; }
    public int Duration { get; set; }
    public int ResponseTime { get; set; }
    public int TagsCount { get; set; } = 0;

    public int AgentId { get; set; }
    public AgentModel Agent { get; set; }

    public int RatingId { get; set; }
    public RatingModel Rating { get; set; }
}

