let imageShow = document.querySelector('.imageShow');
let span = document.querySelector('span');
let count = 0;
/* 获取鼠标的点击坐标，在该位置创建一个爱心并使计数器自增一 */
imageShow.addEventListener("dblclick", (event) => {
    let createLeft = event.clientX - event.target.offsetLeft;
    let createTop = event.clientY - event.target.offsetTop;
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = createLeft + 'px'
    heart.style.top = createTop + 'px'
    count++;
    span.innerText = count;
    imageShow.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 1000);
})