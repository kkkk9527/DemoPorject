let container = document.querySelector('.container'),
    button = document.querySelector('button'),
    x = -150;
// 生成元素
for (let index = 0; index < 4; index++) {
    for (let index1 = 0; index1 < 4; index1++) {
        let imagebox = CreateElement('div', ['imagebox']);
        imagebox.style.backgroundPositionX = index1 * x + 'px';
        imagebox.style.backgroundPositionY = index * x + 'px';
        container.appendChild(imagebox);
    }
}
// 添加事件
button.addEventListener('click', () => {
    let imagebox = document.querySelectorAll('.imagebox');
    imagebox.forEach(element => {
        if (element.className.indexOf('active') != -1) {
            element.classList.replace('active', 'notActive');
            container.classList.replace('large', 'small');
        } else {
            if (element.className.indexOf('notActive') != -1) {
                element.classList.replace('notActive', 'active');
            } else {
                element.classList.add('active');
            }
            container.classList.replace('small', 'large');
        }
    });
})


function CreateElement(tagName, classList) {
    let element = document.createElement(tagName.toString());
    classList.forEach(className => {
        element.classList.add(className)
    });
    return element;
}