const h1 = document.createElement("h1");

const h1Text = document.createTextNode("Welcome to this site");


h1.append(h1Text);  

const div = document.querySelector("div");

div.append(h1);