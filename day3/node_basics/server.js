// How NodeJS differs from Vanilla JS ?
// 1. Node runs on a server - not in a browser (backend not frontend)
// 2. The console is the terminal window
// 3. global object instead of window object.
// console.log(global);
// 4. Has Common Core modules that we will explore,  and vanilla javascript doesn't really have those,  these are modules that relate to the operating system, the file system and other things that we can do on the server.
// 5. CommonJS module instead of ES6 modules.
// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(os.freemem());

// There are couple of values that we always have access to in node
// console.log(__dirname);  // return a full directory
// console.log(__filename); // return a full directory with filename

//  we have more common module is path
const path = require('path');

console.log(path.dirname(__filename));
