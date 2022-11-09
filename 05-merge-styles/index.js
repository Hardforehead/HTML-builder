var fs = require('fs'), path = require('path');
var bundle = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));
var pathToStyles = path.join(__dirname, 'styles');
fs.readdir(pathToStyles, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (path.extname(file) === '.css') {
      var styleStream = fs.createReadStream(path.join(pathToStyles, file), 'utf-8');
      styleStream.on('data', chunk => bundle.write(`${chunk}\n`));
    }
  });
});