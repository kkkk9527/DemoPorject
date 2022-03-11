let panel = document.getElementById('panel') //获取图片
let containers = document.querySelectorAll('.container') //获取父容器

containers.forEach(container => {
    container.addEventListener("drop", dragDrop);
    //允许图片放入目标容器中
    container.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    container.addEventListener("dragleave", dragLeave)
        //图片进入容器时的样式
    container.addEventListener("dragenter", dragEnter)
});
panel.addEventListener("dragstart", dragStart);
panel.addEventListener("dragend", dragEnd);
panel.classList.remove()
    //拖放开始时图片的样式
function dragStart() {
    this.className += 'hold'
    setTimeout(() => {
        this.className = 'invisible';
        this.id = ''
    }, 0)
}
//拖放结束时图片的样式
function dragEnd() {
    console.log(this);
    this.id = 'panel'
}
//图片进入容器时容器的样式
function dragEnter(e) {
    e.preventDefault();
    console.log(this);
    this.classList.add('hovered')
}
//图片离开容器时容器的样式
function dragLeave() {
    console.log(this);
    this.classList.remove('hovered')
}
//拖动完成后将图片放入目标容器及容器的样式
function dragDrop() {
    console.log(this);
    this.className = "container"
    this.appendChild(panel);
}



/** 拖动时将源图片的样式消除能直接让其消失*/