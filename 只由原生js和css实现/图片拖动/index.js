let panel = document.getElementById('panel') //获取图片
let containers = document.querySelectorAll('.container') //获取父容器
    //允许图片放入目标容器中
containers.forEach(container => {
    container.addEventListener("dragover", (event) => {
        event.preventDefault();
    })
});
//拖动完成后将图片放入目标容器
containers.forEach(container => {
    container.addEventListener("drop", (event) => {
        event.preventDefault();
        event.target.appendChild(panel);
    })
});
panel.addEventListener("dragstart", (event) => {
    let imageOffsetX = event.clientX - event.target.offsetLeft; //计算开始拖动时图片的偏离量
    let imageOffsetY = event.clientY - event.target.offsetTop; //计算开始拖动时图片的偏离量
    event.target.parentElement.removeChild(event.target.parentElement.childNodes[0])
    event.dataTransfer.setDragImage(panel, imageOffsetX, imageOffsetY);
});