# Stroy Test Task

I made an app almost same way as you describe it in requirment, but data is less than you write, because I created db and method to generate Data, and because of it it generating less then in your JSON.

### Run the Database

If you have the database already configured and just want to run it, then:

```cmd
docker start  mypostgres
```

Note this is a Linux container. Your Docker Desktop must be running Windows containers.


### Create or Update the Database

The project uses PostgreSQL database to store user data.

The easiest way to spin up a database locally is using Docker:

1. Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Run the following command in your shell: `docker run --name mypostgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`. This will pull a PostgreSQL official container and run it against port 5432.
3. Connect to the database using your database management tool of choice (pgAdmin or DBeaver) and create a Speechise database using the following command: `CREATE DATABASE "StroyDb"`.
4. Navigate to api/StroyTestTask and run the following commands:

```cmd
dotnet tool install --global dotnet-ef --version 7.*
dotnet ef database update
```

These commands install the Entity Framework tool and propagate the migrations to the database.

If you change database schema (add or remove DB model properties, add new models etc), make sure to create a new migration and propagate it to the database:

```cmd
dotnet ef migrations add <MigrationName>
dotnet ef database update
```

# Backend build
Run backend from vs studio as usual way, but BEFORE doing any requests, please make a request to 
https://localhost:7190/GenerateDb  -> via swagger or similar tool to genearte Data, and please use it ONLY ONCE.

## Frontend Build

The client folder contains the frontend application.
It is developed using ReactJs app with vite

The scripts are in package.json 

To run locally:

```cmd
cd client
npm install
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.


# CORS issues
if you are getting CORS per request, so you need to disable CORS on your browser

you need to close the browser and start it with the --disable-web-security and --user-data-dir flags

Or 'open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security' run this command in terminal for mac.



## Docker Compose
I made docker compose, but unfortunalte I had an issue with migrations, you can freely run it via docker, but please at first check DB.

