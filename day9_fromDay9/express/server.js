const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const {logger} = require('./middleware/logEvents.js');
const errorHandler = require('./middleware/errorHandler.js');

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

// WHITELIST create a sites-array of whiteList which we allow in CORS
// todo :: in production mode we can erase 'http://127.0.0.1:5500', 'http://127.0.0.1:3500' ::

const whiteList = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://127.0.0.1:3500'];

// CORS options
const corsOptions = {
    origin: (origin, callback) => {
        // todo :: in production mode we can erase " OR condition ( || !origin ) " ::
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            // console.log(origin);  // undefined
            console.log(whiteList.indexOf(origin));
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


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

app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`LONEWOLF is HUNTING on PORT : ${PORT}`);
});


/**
* todo      Regex Symbols Simplified:
**          ^ : Start of string       
**          | : OR between patterns
**          () : Grouping & capturing
**          ? : Optional match (0 or 1 times)
**          $ : End of string
**          / : Pattern delimiter (in JS)
**          * : 0 or more matches
*/


