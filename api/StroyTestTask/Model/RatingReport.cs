using System;
namespace StroyTestTask.Model;

public class RatingReport
{
	public int BadRating { get; set; }
	public int Count { get; set; }
	public int GoodRating { get; set; }

    public RatingReport(int count, int badRating, int goodRating)
	{
		this.BadRating = badRating;
		this.Count = count;
		this.GoodRating = goodRating;
	}
}

