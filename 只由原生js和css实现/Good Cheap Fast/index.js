let innerSlider = document.querySelectorAll('.ball');
let arr = [];
for (let index = 0; index < innerSlider.length; index++) {
    /* 
    当有两个滑块在右边时，只要第index号滑块滑到右边时第index-1号滑块就会滑到左边，
    如果是第一个滑块最后滑到右边，那么最后一个滑块滑到左边 。
    */
    innerSlider[index].addEventListener('click', (e) => {
        if (e.target.classList[1] == 'left') {
            e.target.className = 'ball right';
            e.target.parentElement.classList.add('active');
            arr.push(index);
            if (arr.length > 2) {
                if (index - 1 >= 0) {
                    arr.shift();
                    innerSlider[index - 1].className = 'ball left';
                    innerSlider[index - 1].parentElement.classList.remove('active');
                } else {
                    innerSlider[2].className = 'ball left';
                    innerSlider[2].parentElement.classList.remove('active');
                }
            }
        } else {
            e.target.className = 'ball left';
            e.target.parentElement.classList.remove('active');
            arr.shift();
        }
    })
}