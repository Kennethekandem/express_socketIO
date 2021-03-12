require('dotenv').config();
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {

    socket.on('testSocket', (msg) => {
        io.emit('testSocket', msg => {
        });
    });

});

http.listen(process.env.PORT, () => {
    console.log("Listening on port :5555");
});
