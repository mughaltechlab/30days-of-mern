const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

// initialize object
const myEmitter = new MyEmitter();

// add listener fot the log event
myEmitter.on('log', (msg) => logEvents(msg));

// Emit event

setTimeout(() => {
    myEmitter.emit('log', 'LONE WOLF IS EATING..!');
}, 2000);
