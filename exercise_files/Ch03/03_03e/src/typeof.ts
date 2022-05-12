const apple = {
  color: "red",
  netto: 523,
  price: 1.2,
  fresh: true,
};

function gettotalprice(param: typeof apple) {
  let disc_price = param * 0.75;
  return disc_price;
}

gettotalprice(23);
