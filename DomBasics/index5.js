const div = document.createElement("div");

const name = "Jack";

div.innerHTML = `
<h1>Welcome to this site ${name}</h1>
<h1>Welcome to web page</h1>
`;

const i =document.createElement("i");

i.classList.add("fa-brands", "fa-facebook");

i.style.fontSize = "80px" ;

const body = document.querySelector("body");

body.append(div);
body.append(i);