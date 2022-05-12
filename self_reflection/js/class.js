class Personalinfo {
    constructor(name, DoB, gender, height) {
        this.name = name;
        this.DoB = DoB;
        this.gender = gender;
        this.height = height;
    }
}
const Riku = new Personalinfo("Jappinen", new Date("1999-01-01"), true, 193);
console.log(Riku);
