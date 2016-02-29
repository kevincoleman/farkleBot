// local includes
var DicePool = require('./lib/dicePool.js');
var Score = require('./lib/score.js');

var kevinsPool = new DicePool;
var score = new Score;

console.log(kevinsPool.rolls);
kevinsPool.rollDice();
var lastRoll = kevinsPool.rolls[kevinsPool.rolls.length - 1];

var vals = [];
var quan = [];
for (val in lastRoll) {
  vals.push(lastRoll[val].value);
  quan.push(lastRoll[val].quantity)
}
console.log(vals);
console.log(quan);

score.getBestScore(kevinsPool.rolls[kevinsPool.rolls.length - 1]);