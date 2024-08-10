const fs = require('fs');

// :: best approach to read a large file ::

// create read stream
const rs = fs.createReadStream('./files/large.txt', {encoding: 'utf8'});

// create write stream
const ws = fs.createWriteStream('./files/new-large.txt');

// :: pipe() is BETTER WAY TO DO THIS INSTEAD OF LISTENER ::
// :: This will accomplish the same thing and piping  is more efficient than the structure with the listener here
rs.pipe(ws);

// :: listening the data which coming in through read able stream ::
// rs.on('data', (dataChunk) => {
//     // write that large data into our new-lorem.txt file.
//     ws.write(dataChunk);
// })
