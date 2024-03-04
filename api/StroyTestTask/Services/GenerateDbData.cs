using System;
using DataAccess.DataAccess;
using DataAccess.Model;

namespace StroyTestTask.Services;

public class GenerateDb
{
    private DataContext _db;
    private List<string> AgentsNames = new List<string>()
    {
        "Adam",
        "Alex",
        "Chernozub.l",
        "Steven",
        "Suhak I.",
        "Support",
        "TEST",
        "Tesliuk P.",
        "Tovkach S.",
         "Tsos I.",
         "Tymchuk O.",
         "Julian",
         "Kopusyak V.",
         "Kostiuchyk I.",
         "Lily",
         "Limit",
         "Lishchuk O.",
         "Lukomska D.",
         "Mironov V.",
         "Max",
         "Mia",
         "Liam",
         "Amelia",
         "Andrew",
         "VIP",
         "Vasylieva D.",
         "Veretelnyk M.",
         "Verification",
         "Yaremenko.Yu",
         "Yevchuk L.",
         "Zhyzhko V.",
         "Tomakh D.",
         "Amy",
         "Babii B.",
         "Badalian M.",
         "Bidnenko I.",
         "Bondar.B",
         "Morrrigan",
         "NewVip",
         "Nikitina.O",
         "Reopen",
         "Review Left",
         "Rudkovskyi.O",
    };

    private List<RatingModel> Ratings = new List<RatingModel>() { new RatingModel() { RatingName = "Good" }, new RatingModel() { RatingName = "Bad"} };

    public GenerateDb(DataContext dbContext )
    {
        this._db = dbContext;
    }

    public void Generate()
    {
        this.GenerateRatings();
        this.GenerateAgents();
        this.GenerateChats();

    }

    private void GenerateRatings ()
    {
        this._db.Ratings.AddRange(this.Ratings);

        this._db.SaveChanges();
    }

    private void GenerateAgents()
    {
        var agents = new List<AgentModel>();
        int id = 1;
        foreach (var agentName in this.AgentsNames)
        {
            var agent = new AgentModel()
            {
                Name = agentName,
                Id = id++
            };
            agents.Add(agent);
        }

        this._db.Agents.AddRange(agents);

        this._db.SaveChanges();
    }

    private void GenerateChats()
    {

        List<ChatModel> chats = new List<ChatModel>();
        Random rnd = new Random();
        int id = 1;

        for (int i = 1; i < 15; ++i)
        {
            DateOnly curr = new DateOnly(2024, 01, i);

            var rating = this._db.Ratings.Find(rnd.Next(1, 3));
            var agent = this._db.Agents.Find(rnd.Next(1, 42));


            var chat = new ChatModel()
            {
                Id = id++,
                Date = curr,
                Duration = rnd.Next(50, 500),
                ResponseTime = rnd.Next(50, 500),
                TagsCount = rnd.Next(1, 20),
                RatingId = rating.Id,
                Rating = rating,
                Agent = agent,
                AgentId = agent.Id,
            };
            chats.Add(chat);

        }
        this._db.Chats.AddRange(chats);
        this._db.SaveChanges();
    }

}
