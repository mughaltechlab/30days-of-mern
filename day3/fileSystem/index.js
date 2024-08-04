const {readFile, writeFile, appendFile} = require('node:fs');
const path = require('path');

// it Buffer, and shows only ASCI code 
// readFile("./intro.txt", (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

// it shows Buffer, but we use data.toString() 
// readFile("./intro.txt", (err,data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });

// it shows now actual content, we use 'utf-8' after path;
readFile(path.join(__dirname, 'intro.txt'),'utf-8' ,(err,data) => {
    if(err) throw err;
    console.log(data);
});


// :: WRITE A FILE ::

writeFile(path.join(__dirname,'files', 'message.txt'),'Writter by NodeJS.',(err) => {
    if(err) throw err;
    console.log('writeFIle..');
});


// :: APPEND MORE CONTENT IN A FILE ::

appendFile(path.join(__dirname,'files', 'message.txt'),'\nWritter by appendFile.',(err) => {
    if(err) throw err;
    console.log('appendFile');
});

// console.log('Lonewolf is hunting...');

// exit on uncaught errors
process.on('uncaughtException', (err) => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
})