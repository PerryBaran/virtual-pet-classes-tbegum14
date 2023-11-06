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

  get isAlive(){
    return !(this.age>30||this.hunger>10||this.fitness<=0)
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

  checkUp() {
    if (this.fitness<=3 && this.hunger>=5){
        return "I am hungry and I need a walk"
    }
    if (this.fitness<=3){
        return "I need a walk"
    }
    if (this.hunger>=5){
        return "I am hungry"
    }
  }
}

module.exports = Pet;
