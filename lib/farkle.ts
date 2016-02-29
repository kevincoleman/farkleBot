class Die {

  sides: number;
  value: number;

  constructor(public newNumberOfSides, public newValue){
    this.sides = newNumberOfSides;
    this.value = newValue;
  }

  roll() {
    this.value = Math.floor(Math.random() * this.sides +1);
  }

}

enum DieQuantities {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes
}


class DicePool {

  constructor(public numberOfDice: number, public rolls: Array<any>, public quantities: DieQuantities){};

  rollDice() {
    var roll = [];

    // make X new dice, based on pool size
    for (var i = 0; i < this.numberOfDice; i++) {
      var die = new Die(6, null);
      die.roll();
      roll.push(die);
    }
    
    // check for quantities of each number
    for (var dieIndex in roll) {
      for (var quantityIndex in roll) {
        if ((quantityIndex !== dieIndex) && (roll[dieIndex].value == roll[quantityIndex].value)) {
          this.quantities[quantityIndex + 1]++;
        }
      }
    
    }
    
    this.rolls.push(roll);
  }


  changeSize(number) {
    this.numberOfDice = this.numberOfDice + number;
  }
}