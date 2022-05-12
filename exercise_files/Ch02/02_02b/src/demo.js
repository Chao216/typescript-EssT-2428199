const Tony = {
    id: 112321,
    name: "Tony Stark",
    birthday: new Date(),
};
const content = `
id : ${Tony.id},<br>
Name: ${Tony.name},<br>
DoB: ${Tony.birthday}}
`;
const block1 = document.createElement("p");
block1.innerHTML = content;
const body = document.querySelector("body");
body.appendChild(block1);
