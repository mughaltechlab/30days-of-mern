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

// serve file
const serveFile = async (filePath, contentType, response) => {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        response.writeHead(200, {'Content-Type' : contentType});
        response.end(data);
    } catch (err) {
        console.error(err);
        response.statusCode(500);
        response.end();
    }
    // response.statusCode = 200;
    // response.setHeader('Content-Type', contentType);
    // fs.readFile(filePath, 'utf8', (err, data) => {
    //     response.end(data);
    // })
}

// create a minimal server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    let extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    let filePath = 
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'views', req.url, 'index.html')
                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url)
                    : path.join(__dirname, req.url);
    
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        // serve a file
        serveFile(filePath, contentType, res);
    } else {
        // 404
        // 301 redirect
        switch(path.parse(filePath).base){
            case 'old-page.html':
                res.writeHead(301, {location : '/new-page.html'});
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, {location : '/'});
                res.end();
                break;
            default:
                // serve a 404
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
                break;
        }
    }
    
    
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
