const chao = {
  surname: "Jiang",
  age: 23,
  student: false,
};

class Info {
  constructor(surname, age, student) {
    this.surname = surname;
    this.age = age;
    this.student = student;
  }
}

const vova = new Info("balin", 28, true);

console.log(chao);
console.log(vova);
