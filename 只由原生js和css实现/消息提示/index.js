// 定义信息
let msg = ['message ', 'one', 'two', 'three', 'four']
    // 获取按键
let button = document.querySelector('button');
//获取信息展示框
let panel = document.querySelector('.grid-item');
button.addEventListener('click', () => {
    let newDiv = document.createElement('div')
    newDiv.classList.add('message', msg[parseInt(Math.random() * 4 + 1)]);
    newDiv.textContent = msg[0] + msg[parseInt(Math.random() * 4 + 1)]
    panel.insertBefore(newDiv, panel.lastChild)
    setTimeout(function() {
        newDiv.remove()
    }, 5000)
})