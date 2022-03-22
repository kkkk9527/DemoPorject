/* 创建DOM元素方法 */
function createElement(tag, classNameList, id) {
    try {
        if (typeof(tag) == 'string') {
            let element = document.createElement(tag);
            if (Array.isArray(classNameList)) {
                classNameList.forEach(className => {
                    element.classList.add(className);
                });
            }
            if (typeof(id) == 'string') {
                element.id = id;
            }
            return element;
        }
    } catch (error) {
        alert(error.message);
    }
}
/* 设置是否可以编辑 */
function isEdit(element) {
    element.getAttribute('readonly') != null ? element.removeAttribute('readonly') : element.setAttribute('readonly', '')
}
/* 删除文本框 */
function deleteNote(e) {
    e.target.parentNode.parentNode.remove(this)
}


let add = document.querySelector('.add'),
    outer = document.querySelector('.outer')
z_index = 0;
add.addEventListener('click', () => {
    /* 创建元素 */
    let container = createElement('div', ['container']);
    let textArea = createElement('textarea');
    let head = createElement('div', ['head']);
    let classlist = [
            ['iconfont', 'icon-biji', 'btn'],
            ['iconfont', 'icon-shanchu', 'btn']
        ],
        idlist = ['addNote', 'removeNote'];
    /* 绑事件 */
    for (let index = 0; index < 2; index++) {
        let element = createElement('button', classlist[index], idlist[index])
        if (index == 0) {
            element.addEventListener('click', () => {
                isEdit(textArea);
            });
        } else {
            element.addEventListener('click', (e) => {
                deleteNote(e);
            });
        }
        head.appendChild(element);
    }
    /* 添加DOM节点 */
    container.appendChild(head);
    container.appendChild(textArea);
    outer.appendChild(container);
})