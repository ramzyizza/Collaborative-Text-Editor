# Project Description
This project is intended to fulfill the 2022 Computer Network and Systems Lab group's final project.

In this final project, we are implementing the concept of socket programming in a real-world application to connect 
multiple clients to a server. The main program functionality is to allow the user to collaboratively add, edit, manipulate,
and delete text in real-time through the local host server. This group project was inspired by one of the well-known online
text or document editors, Google Docs. Hence, we are naming the final product to be CollaboraText. Our goal and scope in this
project is to produce a socket on the server side and also the client side to be able to communicate through a web-based platform (Browser).

Therefore, to accommodate these goals, we decided to write the program using several tech stacks (Libraries & Frameworks), namely:
1. React (Javascript)
2. Socket.io (Client & Server)
3. TailwindCSS (Styling)
4. Quill (Text Tool API)
5. NodeJS (Back-end & Front-end)

Some limitations of this project are the program does not have any backend database to store the progress, thus for every document 
creation or creating a new server will not save previous results. In addition to that, The program will only work through a local 
host server, since we do not deploy or publish it online to be accessible for cross-platform. 

# Getting Started

These instructions will guide you to retrieve the copy of the project and try to run it on your personal local host computer for testing purposes
## Initial Setup

In order to retrieve the copy of the program, try to type on your terminal:
```bash
$ git clone https://github.com/ramzyizza/Collaborative-Text-Editor.git
```
Next, cd into the project and open it with your preferred IDE. It is highly recommended that you use Visual Studio Code.

```bash
$ cd Collaborative-Text-Editor
$ code .
```
Alternatively, you may download the zipped file above, or try to clone it manually through GitHub Desktop.

## Packages Requirements (Ignore if not needed)

In order to run the server and clients, it is mandatory for you to install these modules and dependencies 
(in case it is unavailable on your machine) to fully support the program. If all of these packages are already downloaded, you may jump into the next section:
1. Nodemon (For Running the server)
2. React Script (For running the clients)
3. Socket.io (Connecting Servers and clients)
4. TailwindCSS (For Styling, PostCSS, AutoPrefixer)
5. Quill (For Text Tool)

For more detailed installation, please refer to the latest documentation provided by those libraries and frameworks on
their official website.

### On the client's folder
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
After all packages and dependencies have already been installed, you may try to run the program by
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
After running both the server and client, you need to open localhost:3000 in your preferred browser.
To test that this program works in multiple clients, open multiple tabs of your browsers and copy-paste
this link to all those tabs and try to type any text in it:
```bash
http://localhost:3000/
```

Congratulations! You just completed the full step-by-step guide to run this program on your local machine!

If you still persist in some errors on the setup and package installations due to conflicting modules, we encourage you to 
lookup for the solution in Stackoverflow :D.


## Our References

 - [Web Dev Simplified - Build a Google Docs Clone with React, Socket.io, MongoDB](https://www.youtube.com/watch?v=iRaelG7v0OU&t=2114s)
 - [Code For Interview - Google Docs Clone | React, Socket.io, MongoDB](https://github.com/matiassingers/awesome-readme)

## Our Changes and Improvisation

We highly appreciate to our references above for supporting an excellent step-by-step guide on building our program. However, we want
to emphasize that we only implement some segments of the code provided in the tutorial. Hence, there are a couple of additional changes and improvisation
that was done in this project in order to prevent duplicating references's project, namely:

1. We added and implemented an additional framework (Tailwind)
2. We added additional useful tools and buttons in the toolbar to manipulate the text.
3. We changed the overall concept in which our program focuses on collaborating to create short to medium text, whereas the tutorial focuses on building an exact clone of Google Docs. 
4. We changed the whole interface of the web including favicon, color palette, text field, and buttons using HTML. 
5. We do not use any backend feature to store the database such as MongoDB and Firebase.
6. We eliminate unused files and redundant codes.
7. We added features in which users can insert photos and videos into the text editor.


## Screenshots
### Program Screenshots (Image Insertion and Text Manipulation)
![collaboratext-screenshot.png](https://i.postimg.cc/fLRLZgBK/collaboratext-screenshot.png)
### Program Screenshots (Multiple Clients connected through the local host server)
![collaboratext-screenshot2.png](https://i.postimg.cc/jjmx0dns/collaboratext-screenshot2.png)

## Documentation
<img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/ed3bc270-c74c-4f59-9ec6-b6616207b3a8" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/b38f4d0c-3fa9-4e38-8d19-5fbdad638b44" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/aeab10bb-0182-42c6-8446-b92ff4600a74" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/baa0dad8-964a-4ea5-9be6-d553d9762f91" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/1432fdb0-c68a-426c-8445-7b90a737fcf3" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/c02e9c63-5887-4b4a-8178-54f51eeacb75" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/1839a293-b8ac-44d8-98f4-0a3add42b89f" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/5f959bb6-f8a5-4e0c-8452-89a50cd101e3" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/f334c828-945e-49b4-959b-1f6a02be95bc" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/7b3d0262-09ad-421a-8f09-b8aeca7f60c2" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/c85b9ad6-1e30-48d1-8e5a-6d2fb8838c46" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/93060a01-b03c-4f5c-976b-da3c28f05bbc" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/7df78df1-a7c0-497f-b4fc-05f9ff4d5d8b" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/1087cf27-8ab4-449e-9328-eddbe1c4561e" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/6513daa6-101c-41d7-8f6f-2fd8b86ff9be" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/0483d3df-b55b-4c91-9908-443ecce570a8" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/050669f9-be7d-4754-91d5-739da36b529c" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/55935782-1e72-4afe-8620-5ac7ea925148" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/6c497428-6fcd-4cbd-a9d8-b89cb165cf57" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/3e725e02-b6c8-40ea-8535-af5532a44c39" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/b59386dd-de2f-48e5-b1bf-cc4a5f332165" width="90%"></img> <img src="https://github.com/ramzyizza/Collaborative-Text-Editor/assets/89899122/2f177303-6e16-4cc0-be72-1fb9cd86e3d8" width="90%"></img> 

This documentation was written by
Ramzy Izza W. on November 20th 2022. Updated on 21st October 2023
Any changes will be regularly updated through this readme.md
