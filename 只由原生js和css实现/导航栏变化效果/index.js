let nav = document.querySelector('.nav');
let section = document.querySelector('section');
/* 当鼠标滚动的距离超过 */
window.addEventListener('scroll', () => {
    if (window.scrollY > section.offsetTop / 2) {
        nav.classList.add('active');
    } else if (window.scrollY < section.offsetTop / 2) {
        nav.classList.remove('active');
    }
    // console.log(window.scrollY);
})