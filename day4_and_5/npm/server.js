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

    let filePath;

    // if (req.url === '/' || req.url === 'index.html') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     filePath = path.join(__dirname, 'views', 'index.html');
    //     fs.readFile(filePath, 'utf8', (err, data) => {
    //         res.end(data);
    //     })
    // }


    // :: worst case :: lengthy and failure code ::

    // switch (req.url) {
    //     case '/':
    //         res.statusCode = 200;
    //         res.setHeader('Content-Type', 'text/html');
    //         filePath = path.join(__dirname, 'views', 'index.html');
    //         fs.readFile(filePath, 'utf8', (err, data) => {
    //             res.end(data);
    //         });
            
    //         break;
    
    // }


    // switch (req.url) {
    //     case 'classy.html':
    //         res.statusCode = 200;
    //         res.setHeader('Content-Type', 'text/html');
    //         filePath = path.join(__dirname, 'views', 'index.html');
    //         fs.readFile(filePath, 'utf8', (err, data) => {
    //             res.end(data);
    //         });
            
    //         break;
    
    //     default:
    //         res.statusCode = 404;
    //         res.setHeader('Content-Type', 'text/html');
    //         filePath = path.join(__dirname, 'views', '404.html');
    //         fs.readFile(filePath, 'utf8', (err, data) => {
    //             res.end(data);
    //         });
    //         break;
    // }

    // :: worst case :: lengthy and failure code END ::

    
});

server.listen(PORT,() => {
    console.log('Lonwolf is hunting on port : ' + PORT);
})



// // add listener fot the log event
// myEmitter.on('log', (msg) => logEvents(msg));
// // Emit event
// myEmitter.emit('log', 'LONE WOLF IS EATING..!');
