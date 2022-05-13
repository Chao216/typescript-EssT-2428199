interface coffee {
  name: string;
  volume: number;
  hot: boolean;
  price: number;
  description: string;
  DoP?: Date;
}

type pricelist = Pick<coffee, "name" | "price">; // Pick to select needed key and type

type coffeeintro = Omit<coffee, "volume" | "hot" | "price">; // Omit to discard unwanted key and type

type partialcoffee = Partial<coffee>; // Key and types in coffee are selective based on needs

type reqcoffee = Required<coffee>; // here all keys and types are needed including DoP whichi is selective in coffee interface

type rcdcoffee = Record<"A" | "B" | "C", coffee>;

const object1: rcdcoffee = {
  A: {
    name: "espresso",
    volume: 40,
    hot: true,
    price: 2.4,
    description: "standard espresson from Illy",
  },
  B: {
    name: "espresso",
    volume: 40,
    hot: true,
    price: 2.4,
    description: "standard espresson from Illy",
  },
  C: {
    name: "espresso",
    volume: 40,
    hot: true,
    price: 2.4,
    description: "standard espresson from Illy",
  },
};
// you can think record as a list of items/records

type cakelist = Record<string, number | string | boolean>;

const cakeforsale: cakelist = {
  Brownny: 3,
  cupcake: true,
  waffel: "traditional german flavour",
};
console.log(cakeforsale);

type newlist = Record<string, [number, string, boolean]>;

const caketobuy: newlist = {
  cheesecake: [23, "delicious", true],
  brownny: [32, "high energy", false],
  muphhy: [10, "just made up", true],
};

interface beer {
  name: string;
  price: number;
}

// use Readonly<> to protect by preventing reassign values
const beerforsale: Readonly<beer> = {
  name: "Heikonen",
  price: 2.3,
};

beerforsale.price = 1.8;
