let text = document.createTextNode(`0%`);
let div1 = document.getElementById("div2");
div1.appendChild(text);
let number1 = 0;
setInterval(() => {
    if (number1 < 100) {
        number1++;
        div1.lastChild.nodeValue = `${number1}%`
    } else {
        clearInterval();
    }
}, 20);