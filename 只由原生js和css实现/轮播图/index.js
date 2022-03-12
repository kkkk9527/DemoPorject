let btn = document.querySelectorAll('button');
let container = document.querySelectorAll('.container')
    //console.log(typeof(container[0].style.top));
    //向下轮播
btn[0].addEventListener('click', () => {
        /* 获取当前容器的top属性 */
        let up = parseInt((container[0].style.top.split('%'))[0]);
        let down = parseInt((container[1].style.top.split('%'))[0]);
        /* 向下轮播图片 */
        if (up < 0) {
            up += 100;
            container[0].style.top = up + "%";
        } else {
            container[0].style.top = -200 + "%";
        }
        /* 向上轮播图片 */
        if (down > -200) {
            down -= 100;
            container[1].style.top = down + "%";
        } else {
            container[1].style.top = 0 + "%";
        }
        // container[0].style.top = -200 + '%'
        // container[1].style.top = 0 + '%'
    })
    //向上轮播
btn[1].addEventListener('click', () => {
    /* 获取当前容器的top属性 */
    let up = parseInt((container[0].style.top.split('%'))[0]);
    let down = parseInt((container[1].style.top.split('%'))[0]);
    /* 向上轮播图片 */
    if (up > -200) {
        up -= 100;
        container[0].style.top = up + "%";
    } else {
        container[0].style.top = 0 + "%";
    }
    /* 向下轮播图片 */
    if (down < 0) {
        down += 100;
        container[1].style.top = down + "%";
    } else {
        container[1].style.top = -200 + "%";
    }
    // container[0].style.top = -200 + '%'
    // container[1].style.top = 0 + '%'
})