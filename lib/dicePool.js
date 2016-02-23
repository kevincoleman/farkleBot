var Die = require('./die.js');

function DicePool() {
  this.numberOfDice = 6;
  this.rolls = [];

  this.setNumberOfDice = function(number) {
    this.numberOfDice = number;
  };

  this.getNumberOfDice = function() {
    console.log(this.numberOfDice);
  }

  // no good reason to set rolls on a pool, IMHO

  this.getRolls = function() {
    console.log(this.rolls);
  }

  this.rollDice = function(){
    
    var roll = [];

    for (i = 0; i < this.numberOfDice; i++) {
      var die = new Die;
      die.roll();
      roll.push(die);
    }
    
    for (dieIndex in roll) {
      
      // check for quantities of each number
      roll[dieIndex].quantityInRoll = 1;
      for (quantityIndex in roll) {
        if ((quantityIndex !== dieIndex) && (roll[dieIndex].value == roll[quantityIndex].value)) {
          roll[dieIndex].quantityInRoll++;
        }
      }
    
    }
    
    this.rolls.push(roll);
  
  }

  this.changeSize = function(number) {
    this.numberOfDice = this.numberOfDice + number;
    return 'Number of dice is now ' + this.numberOfDice;
  }
}

module.exports = DicePool;
