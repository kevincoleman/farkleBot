var async = require('async');

module.exports = function Score(roll) {
    
  this.points = 0;

  this.getBestScore = function(roll) {

    async.waterfall();

    // use priority to get best score
    this.sixOfAKind(roll); // 6 dice, 3000 points
    this.twoTriplets(roll); // 6 dice, 2500 points
    this.threePairs(roll); // 6 dice, 1500 points
    this.straight(roll); // 6 dice, 1500 points
    this.fullHouse(roll); // 6 dice, 1500 points
    this.fiveOfAKind(roll); // 5 dice, 2000 points
    this.fourOfAKind(roll); // 4 dice, 1000 points
    this.threeOfAKind(roll); // 3 dice, >= 200 points
    console.log(this.one(roll)); // 1 die, 100 points
    this.five(roll); // 1 die, 50 points

    console.log('Score: ' + this.points);
    
    var vals = [];
    var quan = [];
    for (val in roll) {
      vals.push(roll[val].value);
      quan.push(roll[val].quantity)
    }
    console.log(vals);
    console.log(quan);

    return roll;

  }

  this.twoTriplets = function(roll) {
    // check for two triplets
    if ((roll.length == 6) &&
      (roll[0].quantity == 3) &&
      (roll[1].quantity == 3) &&
      (roll[2].quantity == 3) &&
      (roll[3].quantity == 3) &&
      (roll[4].quantity == 3) &&
      (roll[5].quantity == 3)
    ) {

      this.points += 2500;
      roll = [];
    }

    return roll;

  };
  
  this.fullHouse = function(roll) {
    // four of a kind plus a pair, 1500
  };
  
  this.threePairs = function(roll) {
    
    var hasCombo = false;

    if ((roll.length == 6) &&
      (roll[0].quantity == 2) &&
      (roll[1].quantity == 2) &&
      (roll[2].quantity == 2) &&
      (roll[3].quantity == 2) &&
      (roll[4].quantity == 2) &&
      (roll[5].quantity == 2)
    ) {
      hasCombo = true;
    }

    if (hasCombo) {
      this.points += 1500;
      roll = [];
    }

    return roll;

  };
  
  this.straight = function(roll) {
    
    var hasCombo = false;

    if ((roll.length == 6) &&
      (roll[0].quantity == 1) &&
      (roll[1].quantity == 1) &&
      (roll[2].quantity == 1) &&
      (roll[3].quantity == 1) &&
      (roll[4].quantity == 1) &&
      (roll[5].quantity == 1)
    ) {
      hasCombo = true;
    }

    if (hasCombo) {
      this.points += 1500;
      roll = [];
    }

    return roll;

  };
  
  this.sixOfAKind = function(roll) {

    var  hasCombo = false;

    for (die in roll) {
      if (roll[die].quantity == 6) {
        hasCombo = true;
      }
    }

    if (hasCombo) {
      this.points += 3000;
      roll = [];
    }

    return roll;

  };
  
  this.fiveOfAKind = function(roll) {

    var hasCombo = false;

    for (die in roll) {
      if (roll[die].quantity == 5) {
        hasCombo = true;
      }
    }

    if (hasCombo) {

      this.points += 2000;

      var newRoll = [];
      for (die in roll) {
        if (roll[die].value !== 5) {
          newRoll.push(roll[die]);
        }
      }
      roll = newRoll;
    }

    return roll;

  };

  this.fourOfAKind = function(roll) {

    var hasCombo = false;

    for (die in roll) {
      if (roll[die].quantity == 4) {
        hasCombo = true;
      }
    }

    if (hasCombo) {

      this.points += 1000;

      var newRoll = [];
      for (die in roll) {
        if (roll[die].value !== 4) {
          newRoll.push(roll[die]);
        }
      }
      roll = newRoll;
    }

    return roll;
  };

  this.threeOfAKind = function(roll) {

    var hasCombo = false;
    var comboNumber = null;

    for (die in roll) {
      // if it has three ones, you’re better off taking them as 100’s
      if ((roll[die].quantity == 3) && (roll[die].value !== 1)) {
        hasCombo = true;
        comboNumber = roll[die].value;
      }
    }

    if (hasCombo) {

      this.points += comboNumber * 100;

      var newRoll = [];
      for (die in roll) {
        if (roll[die].value !== 3) {
          newRoll.push(roll[die]);
        }
      }
      roll = newRoll;
    }

    return roll;
  };

  this.one = function(roll) {
    for (die in roll) {
      if (roll[die].value == 1) {
        this.points += 100;
      }
    }

    var newRoll = [];
    for (die in roll) {
      if (roll[die].value !== 1) {
        newRoll.push(roll[die]);
      }
    }
    roll = newRoll;

    return roll;
  };

  this.five = function(roll) {
    for (die in roll) {
      if (roll[die].value == 5) {
        this.points += 50;
      }
    }

    var newRoll = [];
    for (die in roll) {
      if (roll[die].value !== 5) {
        newRoll.push(roll[die]);
      }
    }
    roll = newRoll;

    return roll;
  };
};