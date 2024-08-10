const express = require('express');
const app = express();
const path = require('path');

// PORT
const PORT = process.env.PORT || 3500;

app.get('^/$|/index.html', (req, res) => {
    // res.send('WELCOME in MY worLD');
    // res.sendFile('./views/index.html', {root: __dirname});
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
    res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
        if (err) console.log(err);
        res.end();
    })
})


app.listen(PORT, () => {
    console.log(`LONEWOLF is HUNTING on PORT : ${PORT}`);
});