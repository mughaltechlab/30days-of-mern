const {logEvents} = require('../middleware/logEvents.js');

const errorHandler = (err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('NOT ALLOWED BY CORS');
    const msg = `${req.method}\t${req.headers.origin}\t${req.url}`;
    logEvents(msg,'errLogs.txt');
    next();
};

module.exports = errorHandler;