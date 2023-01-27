# Netstix

* Christopher Yambao
* Griffin Scott
* Tina Tran
* Nicolas Gallo

# Design
-[Wireframe](docs/NetStixWireframe.png)



# Intended Audience

This is an application by gamers for gamers. We sought out to help gamers find the next great game to play. We make this easier by offering a giant library of games and connecting them with a rating as well as tags such as their genre, and multiplayer compatibility.

# Functionality

Users of the site can:
* View our homepage, consisting of the hottest games out right now
* Peruse a massive repository of games
* Can access tags connected to the games such as "action, multiplayer, fantasy"
* Leave reviews and access other user's reviews of games
* Can login using a username, password, and email
* Have a sense of security regarding their personal information given our built-in authentication system that encrypts passwords.

# Project Initialization

1. Clone this repository down to your device.
2. Enter the directory and run the following commands:
3. `docker volume create postgres-data`
4. `docker volume create pg-admin`
5. `docker compose build`
6. `docker compose up`
7. `docker exec -it module3-project-gamma-fastapi-1 bash`
8. `python -m migrations up` while in the module3-project-gamma-fastapi-1 container.
9. Enjoy Netstix (the most important step)



