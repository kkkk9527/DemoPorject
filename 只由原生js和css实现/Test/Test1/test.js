let a = document.createElement('div');
let b = document.createTextNode("666");
let c = document.getElementById("p1");
a.createTextNode("666");
document.body.appendChild(a);
console.log(c.innerHTML);