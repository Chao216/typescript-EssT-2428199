const Personalinfo = /** @class */ (function () {
  // eslint-disable-next-line no-shadow
  class Personalinfo {
    constructor(name, DoB, gender, height) {
      this.name = name;
      this.DoB = DoB;
      this.gender = gender;
      this.height = height;
    }
  }
  return Personalinfo;
})();
const Riku = new Personalinfo("Jappinen", new Date("1999-01-01"), true, 193);
console.log(Riku);
