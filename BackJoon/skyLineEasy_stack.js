const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let record = ['0'];
  let cnt = 0;
  let beforeHeight = 0;

  for (let letter of input) {
    if (!letter.includes(' ')) continue;
    let currentHeight = letter.split(' ')[1];

    while (Number(record[record.length - 1]) > Number(currentHeight)) {
      record.pop();
      cnt++;
    }

    if (record[record.length - 1] !== currentHeight) record.push(currentHeight);

    beforeHeight = currentHeight;
  }

  console.log(cnt + record.length - 1);
  process.exit();
});
