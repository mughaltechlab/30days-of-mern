const fs = require('fs');

// creating a directory / create a new folder
if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created');
    });
} else console.log('file already exist');


// deleting a directory / delete a new folder
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory deleted');
    });
} else console.log('file not exist');