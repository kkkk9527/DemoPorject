let a = document.getElementById('btn')
a.addEventListener('click', function(e) {
    let buttonX = e.target.offsetLeft, //获取元素距离父元素的左边距
        buttonY = e.target.offsetTop, //获取元素距离父元素的上边距
        mouseX = e.clientX, //获取鼠标以浏览器左上方为顶点的x坐标
        mouseY = e.clientY; //获取鼠标以浏览器左上方为顶点的y坐标

    /*计算元素内将要生成的子元素的位置*/
    let xInside = mouseX - buttonX;
    let yInside = mouseY - buttonY;

    const circle = document.createElement('span');
    circle.classList.add('garden');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    console.log(xInside, yInside)
    this.appendChild(circle);
    /*消除子元素 */
    setTimeout(() => {
        circle.remove();
    }, 290);
})