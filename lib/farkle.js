function Die() {
  this.sides = 6;
}

Die.prototype.roll = function() {
  return Math.floor(Math.random() * this.sides + 1);
}

function DicePool() {
  this.dice = 6;
  this.locked = [];
  this.score = 0;
}

DicePool.prototype.roll = function() {
  var results;
  for (number in (this.dice - this.locked)) {
    var die = new Die;
    results.push(die.roll);
  }
  return results;
}

module.exports = Die;
module.exports = DicePool;
