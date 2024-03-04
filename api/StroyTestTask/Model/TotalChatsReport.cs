using System;
namespace StroyTestTask.Model;


public class TotalChatsReport
{
    public int Total { get; set; }

    public TotalChatsReport(int totalByDate)
    {
        this.Total = totalByDate;
    }
}

