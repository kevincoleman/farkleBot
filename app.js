// local includes
var DicePool = require('./lib/dicePool.js');

var kevinsPool = new DicePool;

console.log(kevinsPool);
kevinsPool.rollDice();
console.log(kevinsPool.rolls);