# Project Description
This project is intended to fulfill the 2022 Computer Network and Systems Lab group's final project.

- Ramzy Izza Wardhana - 21/472698/PA/20322
- Audrey Shafira Fattima - 21/472678/PA/20320
- Moehammad Azzriel Ilham - 21/477994/PA/20724


In this final project, we are implementing the concept of socket programming in a real-world application to connect 
multiple clients to a server. The main program functionality is to allow the user to collaboratively add, edit, manipulate,
and delete text in real time through the local host server. This group project was inspired by one of the well-known online
text or document editors, Google Docs. Hence, we are naming the final product to be CollaboraText. Our goal and scope in this
project is to produce a socket on the server side and also the client side to be able to communicate through a web-based platform (Browser).


Therefore, to accomodate these goals, we decided to write the program using several tech-stacks (Libraries & Frameworks), namely:
1. React (Javascript)
2. Socket.io (Client & Server)
3. TailwindCSS (Styling)
4. Quill (Text Tool API)
5. NodeJS (Back-end & Front-end)

Some limitations of this project are the program does not have any backend database to store the progress, thus for every document 
creation or creating a new server will not save previous results. In addition to that, The program will only work through a local 
host server, since we do not deploy or publish it online to be accessible for cross-platform. 

# Getting Started

These instructions will guide you to retrieve the copy of the project and try to run it in your perosnal local host computer for testing purposes

## Initial Setup

In order to retrieve the copy of the program, try to type:

```bash
$ git clone https://github.com/ramzyizza/Collaborative-Text-Editor
```
Next, cd into the project and open it with your prefered IDE. It is highly recommended for you to
use Visual Studio Code.

```bash
$ cd Collaborative-Text-Editor
$ code .
```
Alternatively, you may download the zipped file above, or try to clone it manually through GitHub Desktop.

## Packages Requirements (Ignore if not needed)

In order to run the server and clients, it is mandatory for you to install these modules and dependencies 
(in case it is unavailable in your machine) to fully support the program. If all of these packages are already downloaded, you may jump into the next section:
1. Nodemon (For Running the server)
2. React Script (For running the clients)
3. Socket.io (Connecting Servers and clients)
4. TailwindCSS (For Styling, PostCSS, AutoPrefixer)
5. Quill (For Text Tool)

For more detailed installation, please refer to the latest documentation provided by those libraries and frameworks open
their official website.

### On the clients folder
Head over to the client folder first:
```bash
$ cd clients
$ npm install
$ npm init -y
```
Quill installation
```bash
$ npm i quill
```
React-script installation
```bash
$ npm install react-scripts --save
```
Socket.io (client) installation
```bash
$ npm i socket.io-client
```
TailwindCSS (PostCSS and AutoPrefixer) installation
```bash
$ npm install -D tailwindcss postcss autoprefixer
```

### On the server folder
Head over to the server folder first:
```bash
$ cd server
$ npm install
$ npm init -y
```
Socket.io (server) installation
```bash
$ npm i socket.io
```
Nodemon installation
```bash
$ npm i --save-dev nodemon
```

# Running the program
After all packages and dependencies has already installed, you may try to run the program by
running the server side first.

### On the server folder
Head over to the server folder first:
```bash
$ cd server
$ npm run startServer
```

### On the client folder
Head over to the server folder first:
```bash
$ cd client
$ npm run startClient
```
After running both server and client, you need to open localhost:3000 in your prefered browser.
To test that this program works in multiple clients, open multiple tabs of your browsers and copy paste
this link to all those tabs:
```bash
http://localhost:3000/
```

Congratulations! You just completed the full step-by-step guide to run this program in your local machine!

If you persist some errors on the setup and package installations due to conflicting modules, we encorage you to 
lookup for the solution in Stackoverflow :D.

This documentation was written by
Ramzy Izza W. on November 20th 2022
Any changes will be regularly updated through this readme
