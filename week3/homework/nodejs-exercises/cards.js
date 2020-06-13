const hbs = require('handlebars');

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

const card = "{{subject}} is greater to {{punchline}}";

function getRandomWord(){
  const ranN1 = Math.floor(Math.random() * 7);
  const ranN2 = Math.floor(Math.random() * 7);
  return [subjects[ranN1], punchlines[ranN2]];
}


function drawCard(){
  const subRan = getRandomWord()[0];
  const punchRan = getRandomWord()[1];
  const cardData = {
    subject : subRan,
    punchline : punchRan
  }
  return cardData
}

// Compile the card using the compile method
const template = hbs.compile(card);

// Combine the compiled template with the cardData
const result = template(drawCard());

console.log(result)