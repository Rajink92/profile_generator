const readline = require('readline');
const log = console.log;
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

const questions = [
  'What is your name? ',
  'What is your fav activity? ',
  'What do you listen to while doing that? ',
  'What is your favourite meal? ',
  'Name places you have travelled?: '
];

let answers = [];

const nextQuestion = () => {
  rl.question(questions.shift(), answer => {
    answers.push(answer);
    if (0 === questions.length) {
      rl.close();
    } else {
      nextQuestion();
    }
  });
};

nextQuestion();

rl.on('close', () => {
  answers = {
    name : answers[0],
    activity : answers[1],
    food : answers[2],
    music : answers[3],
    vacationSpot : answers[4],
  };

  let paragraph = `
  ${answers.name} likes to ${answers.activity}. Sometimes ${answers.name} listens to ${answers.music}.
  They like to travel to ${answers.vacationSpot}.
  `;

  log(paragraph);
});
