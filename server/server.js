//Function to do the connections
const io = require('socket.io')(3001, {     //sets 3001 to make it a different url 
    cors:   {                               //course origin request support to make the request from a diff url
        origin: 'http://localhost:3000',   //local host as the origin of connection
        methods: ['GET', 'POST'],          //Do a GET request and POST request to retrieve the connection
                
    },
})
//If connections established notify through socket
io.on("connection", socket => {
    console.log("Connection Established")
    //Add event listener to receive changes from clients (delta)
    socket.on('send-changes', delta => {
        console.log(delta)
        socket.broadcast.emit("receive-changes", delta)
    })
})

var cors = require('cors')
