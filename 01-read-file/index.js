var fs = require('fs'), path = require('path');
var pathToFile = path.join(__dirname, 'text.txt');
var getReadStream = fs.createReadStream(pathToFile, 'utf-8');
var text = '';
getReadStream.on('data', (chunk) => text = text + chunk);
getReadStream.on('end', () => console.log(text));