let readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log('Your name is: ' + answer);
});

rl.on('SIGINT', function () {
  console.log('This important software is now closing');
  rl.close();
});
