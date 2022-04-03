let url = [
        './images/a0kb5-1ed9t.jpg',
        './images/a4e90-lxrg2.jpg',
        './images/aa36t-o0api.jpg',
        './images/akor2-an2wd.jpg',
        './images/ank3c-kkt66.jpg',
        './images/ayjtr-jg9oh.jpg',
        './images/azqdg-oavg8.jpg'
    ],
    classList = ['showPanel'],
    classList1 = ['showImage'];
/* 生成DOM结构 */
let container = document.querySelector('.container');
let showPanel = CreateElement('div', classList);
let left = 0;
showPanel.style.width = url.length * 100 + '%';
showPanel.style.left = 0 + '%';
url.forEach(Url => {
    let showImage = CreateElement('div', classList1);
    showImage.style.width = 100 / url.length + '%';
    showImage.style.backgroundImage = `url(${Url})`;
    showPanel.appendChild(showImage);
});
container.appendChild(showPanel);


/* 设置自动切换图片时间 */
let timer = setInterval(() => {
    autoSlide()
}, 3000);
/* 切换到上一张图片 */
document.querySelector('.Prev').addEventListener('click', () => {
        clearInterval(timer);
        if (left > 0) {
            left--;
            showPanel.style.left = '-' + left * 100 + '%';
        } else {
            left = url.length - 1;
            showPanel.style.left = '-' + left * 100 + '%';
        }
        timer = setInterval(() => {
            autoSlide()
        }, 3000);
    })
    /* 切换到下一张图片 */
document.querySelector('.Next').addEventListener('click', () => {
    clearInterval(timer);
    if (left < url.length - 1) {
        left++;
        showPanel.style.left = '-' + left * 100 + '%';
    } else {
        left = 0;
        showPanel.style.left = left + '%';
    }
    timer = setInterval(() => {
        autoSlide()
    }, 3000);
})

/* 切换图片 */
function autoSlide() {
    if (left < url.length - 1) {
        left++;
        showPanel.style.left = '-' + left * 100 + '%';
    } else {
        left = 0;
        showPanel.style.left = left + '%';
    }
}
/* 生成元素 */
function CreateElement(tagName, classList) {
    let element = document.createElement(tagName.toString());
    classList.forEach(className => {
        element.classList.add(className)
    });
    return element;
}