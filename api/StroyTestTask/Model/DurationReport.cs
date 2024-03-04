using System;
namespace StroyTestTask.Model;



public class DurationReport
{
    public int Count { get; set; }
    public int AgentsChattingDuration { get; set; }
    public int Duration { get; set; }

    public DurationReport(int count, int agentsChattingDuration, int duration)
    {
        this.Count = count;
        this.AgentsChattingDuration = agentsChattingDuration;
        this.Duration = duration;
    }

}

