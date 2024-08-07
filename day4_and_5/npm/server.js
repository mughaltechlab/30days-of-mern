const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };

// initialize object
const myEmitter = new Emitter();

// PORT
const PORT = process.env.PORT || 3500;

// create a minimal server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(PORT,() => {
    console.log('Lonwolf is hunting on port : ' + PORT);
})



// // add listener fot the log event
// myEmitter.on('log', (msg) => logEvents(msg));
// // Emit event
// myEmitter.emit('log', 'LONE WOLF IS EATING..!');
