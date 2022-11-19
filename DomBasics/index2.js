const h1 = document.createElement("h1");
const h1Two = document.createElement("h1");

h1.innerText = "Welcome to this site";
h1Two.innerText = "Welcome to web pages";

const div = document.querySelector("body");

div.append(h1Two);
div.append(h1);