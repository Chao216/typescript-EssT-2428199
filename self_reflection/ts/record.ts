import { data } from "jquery";

const x: Record<string, number | boolean | string | Date> = {
  name: "hand soap",
};

x.id = 123;
x.something = false;
x.name = "soap liquid";
x.purchaseDate = new Date("2019-09-29");

console.log(x);
