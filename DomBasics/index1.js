const h1 = document.createElement("h1");
const h1Two = document.createElement("h1");

const h1Text = document.createTextNode("Welcome to this site");
const h1TwoText = document.createTextNode("Welcome to web page");


h1.append(h1Text);  
h1Two.append(h1TwoText);  

const div = document.querySelector("body");

div.append(h1); 
div.append(h1Two); 