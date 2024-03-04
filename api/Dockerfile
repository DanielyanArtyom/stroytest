# Get base Sdk image from microfost 
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app
EXPOSE 80
EXPOSE 443
# copy csproj file and restore  any dependecies
COPY ["DataAccess/DataAccess.csproj", "DataAccess/"]
COPY ["StroyTestTask/StroyTestTask.csproj", "StroyTestTask/"]
RUN dotnet restore "StroyTestTask/StroyTestTask.csproj"

# Copy the project files and build our release
# WORKDIR "/src/StroyTestTask"
# RUN dotnet build "StroyTestTask.csproj" -c Release -o /app/build

COPY . ./
RUN dotnet publish -c Release -o out

#Generate runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final-env
WORKDIR /app
EXPOSE 80
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "StroyTestTask.dll"]

