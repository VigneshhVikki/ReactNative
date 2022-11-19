const div = document.createElement("div");

const name = "Jack";

div.innerHTML = `
<h1>Welcome to this site ${name}</h1>
<h1>Welcome to web page</h1>
`;

const body = document.querySelector("body");

body.append(div);