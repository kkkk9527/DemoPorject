let string = 'We Love Programming!'
let count = 0;
let textShow = document.querySelector('.textShow');
let inputNum = document.querySelector('.Num');
let speed = 500 / inputNum.value;
inputNum.addEventListener('input', (event) => {
    speed = 500 / event.target.value;
})
writeText();

function writeText() {
    textShow.innerText = string.slice(0, count + 1)
    count++
    if (count >= string.length) {
        count = 0;
    }
    console.log(speed);
    setTimeout(writeText, speed)
}


/* innerText +=遇到空格不会添加上去，只能直接赋值解决 */