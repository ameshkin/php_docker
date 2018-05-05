## SIMPLE PHP and DOCKER SETUP

This was a test for an interview so I decided to share it.

#### Installation


```bash

# build the docker image
docker build -t php-docker .

# run the docker container on this machine. Expose its internal
# port 80 to this machine's port 8080
docker run --rm -d -p 8080:80 php-docker
```


With docker compose you could also do this


```bash
docker-compose up;

composer install;

```



### Backend

At this point your PHP backend should be up.
 
[http://localhost:8080/](http://localhost:8080/) 


### Frontend

To build AND serve the frontend, you will need npm and gulp.  From the main directory just run these commands.

```bash

# first build npm
npm install;

# run gulp although this is not necessary unless changing the code
gulp;
```

Your simple front end should be up here.  You could easily add react, angular, webpack as your front end system if you wish.
 
[http://localhost:3000/](http://localhost:3000/) 


You can click on the gallery icon to see the images in that gallery.  There is no backend system as of yet but I would like to use MONGO DB.




### misc docker commands for devs for referance

```bash

docker-compose up


docker login

docker container ls 

docker stop containerid
```


### some features I would like to add

react
webpack
