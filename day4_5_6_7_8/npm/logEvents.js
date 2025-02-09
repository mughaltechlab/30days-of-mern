const fs = require('fs');
const fsPromises = require('fs').promises;

const { format } = require('date-fns');
const { v4 : uuid } = require('uuid');

const path = require('path');


const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const check = fs.existsSync(path.join(__dirname, 'logs')) ? '\n' : '';
    const logItem = `${check}${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'), err => {
                if (err) throw err;
                console.log('logs Directory created.')
            });
        }

        await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);

    } catch (err) {
        console.log('logEvents function error : ' + err);
    }
}

module.exports = logEvents;