interface wheretobuy {
  name: string;
  zip: number;
  location: string;
}
interface car {
  price: number;
  color: string;
  condition: boolean;
  tobuy: wheretobuy;
}

type newtask = car["tobuy"]["zip"];

// you can nest interface
