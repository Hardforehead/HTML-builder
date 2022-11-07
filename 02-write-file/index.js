var fs = require('fs'), path = require('path');
var pathToFile = path.join(__dirname, 'text.txt');
var { stdin, stdout } = process;
var getWriteStream = fs.createWriteStream(pathToFile);
getWriteStream.write('');
stdout.write('Пожалуйста, введите текст:\n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') process.exit();
  getWriteStream.write(data);
});
process.on('SIGINT', () => { process.exit(); });
process.on('exit', () => stdout.write('Спасибо! Всего доброго :)'));