const person = { name: "Thomas", age: 23, student: true };

function guess(param: typeof person) {
  // do something here
}

const amy = { age: 13, name: "Amy Schneider", student: false };
guess(amy);

interface handy {
  brand: string;
  preis: number;
  billig: boolean;
}

type newfield = keyof handy;

const example: newfield[] = ["billig", "brand", "preis"];
console.log(example);

interface coffee {
  intensity: number;
  withmilk: boolean;
  volume: number;
  name: string;
}

const espresso: coffee = {
  intensity: 5,
  withmilk: false,
  volume: 40,
  name: "SoE",
};

function myfunc2(param1: typeof espresso) {
  // do something
}

const latte: coffee = {
  intensity: 2,
  withmilk: true,
  volume: 300,
  name: "caffee Latte",
};

myfunc2(latte);

type anothertype = keyof coffee;

const answer: anothertype[] = ["intensity", "name", "volume", "withmilk"];
