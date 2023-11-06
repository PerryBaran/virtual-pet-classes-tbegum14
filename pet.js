const MIN_HUNGER = 0;
const INITIAL_AGE = 0;
const MAX_FITNESS = 10;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
  }

  growUp() {
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  }

  walk() {
    if (this.fitness + 4 > MAX_FITNESS) {
      this.fitness = MAX_FITNESS;
    } else {
      this.fitness += 4;
    }
  }

  feed() {
    if (this.hunger - 3 < 0) {
      this.hunger = MIN_HUNGER;
    } else {
      this.hunger -= 3;
    }
  }
}

module.exports = Pet;
