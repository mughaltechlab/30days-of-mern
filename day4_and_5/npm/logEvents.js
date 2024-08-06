const fs = require('fs');
const fsPromises = require('fs').promises;

const { format } = require('date-fns');
const { v4 : uuid } = require('uuid');

const path = require('path');

console.log(format(new Date() , 'yyyy-MM-dd\tHH:mm:ss'));