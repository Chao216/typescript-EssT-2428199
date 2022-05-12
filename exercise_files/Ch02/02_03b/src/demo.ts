interface Contact {
  id: number;
  name: string;
  birthDate?: Date;
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
};

type shuzi = number;

const a: shuzi = 3;

// use type keyward to give type an alias
