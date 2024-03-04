using System;
namespace StroyTestTask.Model;

public class ResponeModel<T>
{
    public int Total { get; set; }
    public Dictionary<DateOnly, T> Records { get; set; } = new Dictionary<DateOnly, T>();

    public ResponeModel(int total, Dictionary<DateOnly, T> records)
    {
        this.Total = total;
        this.Records = records;
    }
}

