const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writeCsv = (path, obj) => {
  const filePath = fs.join(path, './output.csv');
  const headers = Object.keys(obj);

  let writer = csvWriter();

  if (!fs.existsSync(filePath)) {
    writer = csvWriter({ headers });
  } else {
    writer = csvWriter({ sendHeaders: false });
  }

  writer.pipe(fs.createWriteStream(filePath, { flags: 'a' }));

  writer.write(obj);

  writer.end();
};

module.exports = writeCsv;
