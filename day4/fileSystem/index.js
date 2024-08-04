const fsPromises = require('node:fs').promises ;
const path = require('path');


const fileOperation = async () => {
    try {
        // first read file
        const data = await fsPromises.readFile(path.join(__dirname, 'intro.txt'),'utf8');
        // then write file and put the above data into this file
        await fsPromises.writeFile(path.join(__dirname,'files','promiseMessage.txt'), data);
        // now append some more content
        await fsPromises.appendFile(path.join(__dirname,'files','promiseMessage.txt'), '\nAppend More Content');
        
    } catch (err) {
        console.error(err);
    }
}

fileOperation();

// // it shows now actual content, we use 'utf-8' after path;
// readFile(path.join(__dirname, 'intro.txt'),'utf-8' ,(err,data) => {
//     if(err) throw err;
//     console.log(data);
// });


// // :: WRITE A FILE ::

// writeFile(path.join(__dirname,'files', 'message.txt'),'Writter by NodeJS.',(err) => {
//     if(err) throw err;
//     console.log('writeFIle..');
// });


// // :: APPEND MORE CONTENT IN A FILE ::

// appendFile(path.join(__dirname,'files', 'message.txt'),'\nWritter by appendFile.',(err) => {
//     if(err) throw err;
//     console.log('appendFile');
// });

// // console.log('Lonewolf is hunting...');

// exit on uncaught errors
process.on('uncaughtException', (err) => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
})