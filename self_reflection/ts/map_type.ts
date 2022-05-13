interface cellphone {
  brand: string;
  price: number;
  inWarranty: boolean;
}

interface laptop {
  pinpai: string;
  jiage: number;
  baoxiu: boolean;
}

type newtype = { [Gpro in keyof laptop]?: laptop[Gpro] };

type another = { [GK in keyof cellphone]: cellphone[GK] };
