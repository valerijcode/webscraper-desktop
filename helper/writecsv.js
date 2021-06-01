const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');

const writeCsv = (parentPath, obj) => {
  const filePath = path.join(parentPath, './output.csv');
  const headers = Object.keys(obj);

  let writer = csvWriter();

  if (!fs.existsSync(filePath)) {
    writer = csvWriter({ headers });
  } else {
    writer = csvWriter({ sendHeaders: false });
  }
  console.log(filePath)

  writer.pipe(fs.createWriteStream(filePath, { flags: 'a' }));

  writer.write(obj);

  writer.end();
};

module.exports = writeCsv;
