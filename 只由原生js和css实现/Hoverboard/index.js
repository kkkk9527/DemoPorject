let container = document.querySelector('.container');
/* 添加子元素 */
for (let index = 0; index < 500; index++) {
    let cell = CreateElement('div', ['cell', 'active'])
    container.appendChild(cell)
}
/* 绑定改变元素样式事件 */
container.addEventListener('mouseover', (event) => {
    if (event.target.className.indexOf('cell') != -1) {
        let randomColor = [parseInt(Math.random() * 255), parseInt(Math.random() * 255), parseInt(Math.random() * 255)];
        event.target.style.backgroundColor = `rgb(${randomColor})`;
        event.target.style.boxShadow = `0 0 16px rgb(${randomColor})`;
        event.target.classList.replace('active', 'notActive');
    }
});
container.addEventListener('mouseout', (event) => {
    if (event.target.className.indexOf('cell') != -1) {
        event.target.style.backgroundColor = `rgb(29,29,29)`;
        event.target.style.boxShadow = `0 0`;
        event.target.classList.replace('notActive', 'active');
    }
});

function CreateElement(tagName, classList) {
    let element = document.createElement(tagName.toString());
    classList.forEach(className => {
        element.classList.add(className)
    });
    return element;
}