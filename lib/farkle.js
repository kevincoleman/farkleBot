var Die = (function () {
    function Die(newNumberOfSides, newValue) {
        this.newNumberOfSides = newNumberOfSides;
        this.newValue = newValue;
        this.sides = newNumberOfSides;
        this.value = newValue;
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * this.sides + 1);
    };
    return Die;
}());
var DieQuantities;
(function (DieQuantities) {
    DieQuantities[DieQuantities["ones"] = 0] = "ones";
    DieQuantities[DieQuantities["twos"] = 1] = "twos";
    DieQuantities[DieQuantities["threes"] = 2] = "threes";
    DieQuantities[DieQuantities["fours"] = 3] = "fours";
    DieQuantities[DieQuantities["fives"] = 4] = "fives";
    DieQuantities[DieQuantities["sixes"] = 5] = "sixes";
})(DieQuantities || (DieQuantities = {}));
var DicePool = (function () {
    function DicePool(numberOfDice, rolls, quantities) {
        this.numberOfDice = numberOfDice;
        this.rolls = rolls;
        this.quantities = quantities;
    }
    ;
    DicePool.prototype.rollDice = function () {
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
    };
    DicePool.prototype.changeSize = function (number) {
        this.numberOfDice = this.numberOfDice + number;
    };
    return DicePool;
}());
