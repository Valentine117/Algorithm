const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  // set matrix
  // if input length is max, OOM occurs
  let matrix = new Array(25).fill(0);
  matrix = matrix.map((el) => new Array(5).fill('.'));

  console.log('\n\nEmpty Matrix\n\n--------------------------');
  console.log(matrix);

  let beforeX = 0;
  let beforeY = 0;
  let maximumX = 0;
  let maximumY = 0;

  //Draw
  for (let i in input) {
    if (!input[i].includes(' ')) continue;

    let currentX = Number(input[i].split(' ')[0]);
    let currentY = Number(input[i].split(' ')[1]);

    maximumX = Math.max(currentX, maximumX);
    maximumY = Math.max(currentY, maximumY);

    for (let j = beforeX; j < currentX; j++) {
      for (let k = 1; k <= beforeY; k++) matrix[j][k] = 'X';
    }

    if (Number(i) === input.length - 1) {
      for (let k = 1; k <= currentY; k++) matrix[currentX][k] = 'X';
    }

    beforeX = currentX;
    beforeY = currentY;
  }

  console.log('\n\nResult Matrix\n\n--------------------------');
  console.log(matrix);

  let recordSet = new Set();
  let recordString = '';

  //list record
  for (let y = 1; y <= maximumY; y++) {
    for (let x = 1; x <= maximumX + 1; x++) {
      if (matrix[x][y] === 'X' && recordString === '')
        recordString += x.toString();

      if (matrix[x][y] === '.' && matrix[x - 1][y] === 'X') {
        recordString += `~${x - 1}`;
        recordSet.add(recordString);
        recordString = '';
      }
    }
  }

  console.log(recordSet);
  console.log(recordSet.size);
  process.exit();
});
