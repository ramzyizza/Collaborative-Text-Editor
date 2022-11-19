const io = require('socket.io')(3001, {     //sets 3001 to make it a different url 
    cors:   {                               //course origin request support to make the request from a diff url
        origin: 'http://localhost:3000',   //uses the client port
        methods: ['GET', 'POST'],  
                
    },
})

io.on("connection", socket => {
    console.log("connected")
})


var cors = require('cors')
