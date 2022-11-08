var fs = require('fs'), path = require('path');
var sf = path.join(__dirname, 'secret-folder');
fs.readdir(sf, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach((dirent) => {
    if (dirent.isFile()) {
      var fileArr = dirent.name.split('.');
      fs.stat(path.join(sf, dirent.name), (err, stat) => {
        if (err) throw err;
        var inf = fileArr[0] + ' - ' + fileArr[1] + ' - ' + stat.size / 1000 + 'kb';
        console.log(inf);
      });
    }
  });
});