GitHub Battle - A React app for learn purposes
==========================
This little app was created based on the course by Tyler McGinnis of React Fundamentals https://learn.tylermcginnis.com/courses.

**TODO**
- Tests have not been implemented in the tutorial but I'll add them anyway.
- Flux/Redux will be implemented to manage the data flow.

**Requirements**
- Docker & Docker Compose

## Installation
First of all, make sure you have Docker on your computer. Then, you can proceed with the following steps:
1. Download the project files.
```bash
$ git clone git@github.com:darieldejesus/react-github-battle.git
$ cd react-github-battle/
```
2. Run Docker-Compose in order to start the project container. It will download the required images, build the local Dockerfile image and install required node packages. Then **webpack-dev-server** will be executed.
```bash
$ docker-compose up
```
3. Finally, go to ([localhost:8080](http://localhost:8080)) and confirm it works properly.
```bash
$ curl http://localhost:8080
# This command will return:
!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Github Battle</title>
</head>
<body>
  <div id="app"></div>
<script type="text/javascript" src="/index_bundle.js"></script></body>
```
## Tests
In progress. :)
1. Download the project files.
```bash
docker exec -it reactjstraining_web_1 npm test
```

### Credits
Created by [Dariel de Jesus](http://www.darieldejesus.com).

### Tutorial Credits
React Fundamentals by [Tyler McGinnis](https://learn.tylermcginnis.com/courses/50507)