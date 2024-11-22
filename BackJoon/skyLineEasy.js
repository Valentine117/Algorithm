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
    let thisIsNew = !record.includes(currentHeight);

    if (!record.includes(currentHeight)) record.push(currentHeight);

    record = record.filter((el) => Number(el) <= Number(currentHeight));

    if (thisIsNew) cnt++;

    beforeHeight = currentHeight;
  }

  console.log(cnt);
  process.exit();
});
