const express = require('express');
const app = express();
const path = require('path');
const {logger} = require('./middleware/logEvents.js')

/**
 * Middleware
 * There are three types of Middleware, Built-in, custom, third-party middleware
 */

// custom middleware : we create a log function
// app.use((req, res, next) => {
//     const msg = `${req.method}\t${req.headers.origin}\t${req.url}`;
//     logEvents(msg,'reqLogs.txt');
//     console.log(req.headers.origin);
//     next();
// });
// app.use((req,res,next) => logger(req,res,next));
app.use(logger); // use custom middleware

/**
 * built-in middleware to handle urlencoded data
 * in other words, form data;
 * 'content-type: application/x-www-form-urlencoded'
 */
app.use(express.urlencoded({extended: false}));

// built-in middleware for json
app.use(express.json());

// server static files
app.use(express.static(path.join(__dirname, '/public')));


// PORT
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?', (req, res) => {
    // res.send('WELCOME in MY worLD');
    // res.sendFile('./views/index.html', {root: __dirname});
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); // by default redirect status code 302 but we want 301,
});

// route handlers
app.get('/wolf(.html)?', (req, res, next) => {
    console.log('Lone Wolf is missing');
    next();
}, (req, res) => {
    res.send('LONE WOLF is WATCHING YOU....');
});


const one = (req, res, next) => {
    console.log('One');
    next();
};

const two = (req, res, next) => {
    console.log('Two');
    next();
};

const three = (req, res) => {
    console.log('Three');
    res.send('Hunts Finished');
};

app.get('/chain(.html)?', [one, two, three]);

// default becasue express routes check in waterfall
app.get('/*', (req, res) => {
    res
        .status(404)
        .sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(PORT, () => {
    console.log(`LONEWOLF is HUNTING on PORT : ${PORT}`);
});