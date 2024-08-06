const fs = require('fs');
const fsPromises = require('fs').promises;

const { format } = require('date-fns');
const { v4 : uuid } = require('uuid');

const path = require('path');


const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const check = fs.existsSync('./logs') ? '\n' : '';
    const logItem = `${check}${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);
    try {
        if (!fs.existsSync('./logs')) {
            fs.mkdir('./logs', err => {
                if (err) throw err;
                console.log('logs Directory created.')
            });
        }

        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);

    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;