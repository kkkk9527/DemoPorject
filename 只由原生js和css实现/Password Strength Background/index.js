let input = document.querySelectorAll('input'),
    imageShow = document.querySelector('.imageShow'),
    count = 10,
    lengthTemp = 0;
input[1].addEventListener('input', () => {
    if (input[1].value.length > lengthTemp) {
        count > 0 ? count-- : count = 0;
    } else if (input[1].value.length < lengthTemp && input[1].value.length < 10) {
        count < 10 ? count++ : count = 10;
    }
    lengthTemp = input[1].value.length;
    imageShow.style.filter = `blur(${count}px)`;
})

/* 思路：监视input框的输入字符数，若变大则背景图越清晰，反之若变小且小于一定数字时则背景图片越模糊 */