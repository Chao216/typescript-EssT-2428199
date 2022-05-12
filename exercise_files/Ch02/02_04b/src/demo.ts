import { inArray } from "jquery";

enum accountstatus {
  active,
  inactive,
  cancelled,
}

type ContactName = string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status: accounttstatus;
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
  status: accountstatus.active,
};
