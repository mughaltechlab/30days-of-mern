const path = require('path');

const getIndex = (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'subdir', 'index.html'))
};
const getTestPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'))
};

module.exports = {getIndex, getTestPage};