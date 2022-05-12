interface pc {
  brand: string;
  memory: number;
  processor: string;
  price: number;
  inWarranty: boolean;
}

const laptop: pc = {
  brand: "huawei",
  memory: 8,
  processor: "intel",
  price: 5699,
  inWarranty: false,
};

function dup<G1, G2>(param1: G1): G2 {
  return Object.apply({}, param1);

  console.log("hello");
}
