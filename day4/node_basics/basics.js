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
// 6. Missing some JS APIS like fetch: But of course we can always pull in packages into node and there is a large amount of packages available through npm for node so we won't miss it hat much.

// There are couple of values that we always have access to in node
// console.log(__dirname);  // return a full directory
// console.log(__filename); // return a full directory with filename

//  we have common core module is path

// const path = require('path');
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));


// we can create our own module
// const {add, subtract, multiply, divide} = require('./math.js');
// const myMath = require('./math.js');

// console.log('add 2 + 3 = ' + add(2,3));
// console.log('subtract 3 - 3 =  ' + subtract(3,3));
// console.log('multiply 2 * 3 = ' + multiply(2,3));
// console.log('divide 4 / 2 = ' + divide(4,2));