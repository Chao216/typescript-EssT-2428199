type ContactName = string;

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new",
}

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date | number | string; // you can use | for multiple types
  status?: ContactStatus;
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
};

// you can use | multiple types with an alias

// you can use & to combine different interfacses e.g. type newinterface = intef1 & intef2
// you can also use type alias to rewrite a enum

type choice = "buy" | "not buy" | "leave";

interface shopitem {
  name: string;
  barcode: number;
  tobuy: choice;
}

const shoppinglist: shopitem[] = [
  { name: "chocolate", barcode: 12345, tobuy: "buy" },
  { name: "milk", barcode: 123456789, tobuy: "not buy" },
  { name: "bread", barcode: 111111, tobuy: "leave" },
];

console.log(shoppinglist);
