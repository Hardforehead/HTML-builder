var fs = require('fs'), path = require('path');
var fsPromises = require('fs/promises');
var copyFiles = path.join(__dirname, 'files-copy');
var files = path.join(__dirname, 'files');
async function copy() {
  await fsPromises.mkdir(copyFiles, { recursive: true });
  fs.readdir(copyFiles, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      fs.unlink(path.join(copyFiles, file), err => {
        if (err) throw err;
      });
    });
  });
  fs.readdir(files, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach((dirent) => {
      if (dirent.isFile()) {
        fsPromises.copyFile(path.join(__dirname, 'files', dirent.name), 
        path.join(copyFiles, dirent.name));
      }
    });
  });
}
copy();
