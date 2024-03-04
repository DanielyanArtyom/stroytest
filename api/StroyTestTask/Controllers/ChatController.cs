using System.Text.Json;
using DataAccess.DataAccess;
using DataAccess.Model;
using Microsoft.AspNetCore.Mvc;
using StroyTestTask.Services;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using StroyTestTask.Model;

namespace StroyTestTask.Controllers;

[ApiController]
[Route("[controller]")]
public class ChatContoller : ControllerBase
{
    private DataContext _db;

    public ChatContoller(DataContext db)
    {
        this._db = db;
    }

    [HttpGet("TotalChats")]
    public ResponeModel<TotalChatsReport> GetTotalChats([FromQuery] RequestModel request)
    {
        int total = this._db.Chats.Count();
        var dictionary = new Dictionary<DateOnly, TotalChatsReport>();

        var from =  DateOnly.ParseExact(request.From.ToString("yyyy-mm-dd"), "yyyy-mm-dd",null);
        var to = DateOnly.ParseExact(request.To.ToString("yyyy-mm-dd"), "yyyy-mm-dd", null);


        var output = this._db.Chats.Where(c => from <= c.Date && c.Date <= to).GroupBy(chat => chat.Date).Select(group => new
        {
            Total = group.Count(),
            Date = group.First().Date

        }).ToList();

        foreach(var el in output)
        {
            dictionary.Add(el.Date, new TotalChatsReport(el.Total));
        }

        return new ResponeModel<TotalChatsReport>(total, dictionary);
    }

    [HttpGet("DurationReport")]
    public ResponeModel<DurationReport> GetDurationReport([FromQuery] RequestModel request)
    {
        int total = this._db.Chats.Count();
        var dictionary = new Dictionary<DateOnly, DurationReport>();

        var from = DateOnly.ParseExact(request.From.ToString("yyyy-mm-dd"), "yyyy-mm-dd", null);
        var to = DateOnly.ParseExact(request.To.ToString("yyyy-mm-dd"), "yyyy-mm-dd", null);

        var output = this._db.Chats.Where(c => from <= c.Date && c.Date <= to).GroupBy(chat => chat.Date).Select(group => new
        {
            Count = group.Count(),
            Date = group.First().Date,
            AgentsChattingDuration = new Random().Next(100,600),
            Duration = group.First().Duration,

        }).ToList();

        foreach (var el in output)
        {
            dictionary.Add(el.Date, new DurationReport(el.Count, el.AgentsChattingDuration, el.Duration));
        }

        return new ResponeModel<DurationReport>(total, dictionary);
    }

    [HttpGet("RatingReport")]
    public ResponeModel<RatingReport> GetRatingReport([FromQuery] RequestModel request)
    {
        int total = this._db.Chats.Count();
        var dictionary = new Dictionary<DateOnly, RatingReport>();

        var from = DateOnly.ParseExact(request.From.ToString("yyyy-mm-dd"), "yyyy-mm-dd", null);
        var to = DateOnly.ParseExact(request.To.ToString("yyyy-mm-dd"), "yyyy-mm-dd", null);

        var output = this._db.Chats.Where(c => from <= c.Date && c.Date <= to).GroupBy(chat => chat.Date).Select(group => new
        {
            Count = group.Count(),
            BadRating = group.Count(c => c.RatingId == 1),
            GoodRating = group.Count(c => c.RatingId == 2),
            Date = group.First().Date,
        });

        foreach (var el in output)
        {
            dictionary.Add(el.Date, new RatingReport(el.Count, el.BadRating, el.GoodRating));
        }

        return new ResponeModel<RatingReport>(total, dictionary);
    }

    [HttpGet("TagsReport")]
    public ResponeModel<Dictionary<string, int>> GetTagsReport([FromQuery] RequestModel request)
    {
        int total = this._db.Chats.Count();
        var dictionary = new Dictionary<DateOnly, Dictionary<string, int>>();

        var from = DateOnly.ParseExact(request.From.ToString("yyyy-mm-dd"), "yyyy-mm-dd", null);
        var to = DateOnly.ParseExact(request.To.ToString("yyyy-mm-dd"), "yyyy-mm-dd", null);

        var output = this._db.Chats.Where(c => from <= c.Date && c.Date <= to).Include(c => c.Agent).GroupBy(chat => chat.Date).Select(group => new
        {
            tags = group.ToList(),
            Date = group.First().Date,
        });

        foreach (var el in output)
        {
            var tagsDictionary = new Dictionary<string, int>();

            foreach (var tag in el.tags)
            {
                tagsDictionary.Add(tag.Agent.Name, tag.TagsCount);
            }

            dictionary.Add(el.Date, tagsDictionary);
        }

        return new ResponeModel<Dictionary<string, int>>(total, dictionary);
    }
}

