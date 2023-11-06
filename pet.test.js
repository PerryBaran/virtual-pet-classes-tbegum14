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
