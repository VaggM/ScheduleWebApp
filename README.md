## General Description

Full-stack web app that displays the weekly schedule of students
in the department of Electrical and Electronic Engineering of University of West Attica.

## How to run

Without docker:

> You need to have node.js installed on your machine. 
> https://nodejs.org/en/download/ 
>
> For the database, you need a mysql server to run on your machine
> on port 3306, with a database named "schedule_eee" based on the 
> schedule_eee.sql file on the project as well as user created based on vaggm.sql
>
> Once you have node installed and mysql running do the following :
>
> Open a command window on the downloaded folder of the project and run
> 
> ```
> npm install
> ```
>
> This will download all the required libraries for the project.
>
> Then to start the server, simply run
> 
> ```
> npm start
> ```
>
> or
> 
> ```
> node app.js
> ```

With docker:

> You need to have docker running on your machine.
>
> https://docs.docker.com/get-docker/
>
> Once it is running, copy/download the file docker-compose.yml
> and run the command
> 
> ```
> docker compose –f “d docker-compose.yml” up –d –build
> ```
>
> It will create a docker compose container that creates both a mysql server
> as well as our app server. The servers are based on two public docker images
> I have uploaded on dockerhub.
>
> https://hub.docker.com/repository/docker/vaggm/scheduleapp/general
>
> https://hub.docker.com/repository/docker/vaggm/schedulesql/general
>
> The app takes about 30 seconds to start because its waiting for mysql
> server to be on a healthy state for connections.