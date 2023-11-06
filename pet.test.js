const Pet = require("./pet");

describe("object constructor using class method", () => {
  test("constructor returns instance of an object", () => {
    expect(new Pet("Toby")).toBeInstanceOf(Object);
  });

  test("constructor returns instance of an object", () => {
    const pet = new Pet("Toby");
    expect(pet.name).toEqual("Toby");
  });
});

describe("growUp method", () => {
  const pet = new Pet("Toby");
  pet.growUp();
  test("growUp increases age by 1", () => {
    expect(pet.age).toEqual(1);
  });

  test("growUp increases hunger by 5", () => {
    expect(pet.hunger).toEqual(5);
  });

  test("growUp decreases fitness by 3", () => {
    expect(pet.fitness).toEqual(7);
  });
});

describe("walk method", () => {
  const pet = new Pet("Toby");
  test("walk increases fitness by 4", () => {
    pet.growUp();
    pet.growUp();
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  test("walk does not increase fitness above 10", () => {
    pet.growUp();
    pet.fitness = 9;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe("feed method", () => {
  const pet = new Pet("Toby");
  test("feed decreases hunger by 3", () => {
    pet.growUp();
    pet.growUp();
    pet.feed();
    expect(pet.hunger).toEqual(7);
  });
  test("feed does not decrease hunger below 0", () => {
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe("checkUp method", () => {
  const pet = new Pet("Toby");
  test("checkUp notifies when fitness is 3 or less", () => {
    pet.fitness = 2;
    expect(pet.checkUp()).toEqual("I need a walk");
  });

  test("checkUp notifies when hunger is 5 or more", () => {
    pet.fitness = 4;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual("I am hungry");
  });

  test("checkUp notifies when fitness is 3 or less and hunger is 5 or more", () => {
    pet.fitness = 2;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual("I am hungry and I need a walk");
  });
});

describe("isAlive", () => {
  test("isAlive returns false if fitness is 0 or less", () => {
    const pet = new Pet("Toby");
    pet.fitness = 0;
    expect(pet.isAlive).toBeFalsy();
  });

  test("isAlive returns true if fitness over 0, age<30 and hunger<10", () => {
    const pet = new Pet("Toby");
    expect(pet.isAlive).toBeTruthy()
  });
});
