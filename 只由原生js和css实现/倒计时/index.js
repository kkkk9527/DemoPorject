let outer1 = document.querySelector('.outer1'),
    outer = document.querySelector('.outer'),
    button = document.querySelector('button'),
    number = document.querySelector('.number'),
    showNumber = document.querySelector('.showNumber'),
    count = 3;
number.innerText = count;
outer1.classList.add('notActive');
showNumber.classList.add('animeActive');

let timer = setTimer();
changeNumber(timer);

button.addEventListener('click', () => {
    outer1.classList.replace('active', 'notActive');
    outer.classList.remove('notActive');
    showNumber.classList.add('animeActive');
    let timer = setTimer();
    changeNumber(timer);
})

function changeNumber(timer) {
    setTimeout(() => {
        outer1.classList.replace('notActive', 'active')
        outer.classList.add('notActive')
        showNumber.classList.remove('animeActive')
        clearInterval(timer);
        count = 3;
        number.innerText = count;
    }, 4000)
}

function setTimer() {
    let timer = setInterval(() => {
        count--
        number.innerText = count;
    }, 1000);
    return timer;
}