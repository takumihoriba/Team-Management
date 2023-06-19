# Frontend

This folder contains all the frontend content.

## Docker Container
To run the docker compose file for this, please run the following:

``` bash
docker-compose up --build --no-recreate -d
```

This will build the frontend image and run it in a container.

Everytime after, you can run the following to start the container:

``` bash
docker-compose up -d
```

Now you can view the container using:

``` bash
docker-compose ps
```
From there, you can directly work with the container using the following:

``` bash
docker exec -it vite_docker sh
```

Finally to run the image from there, you can use the following commands

``` bash
npm i
npm run dev
```