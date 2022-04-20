let input = document.querySelectorAll('input');
input.forEach((element, index) => {
        element.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    e.target.value = e.target.value < 9 ? e.target.value * 1 + 1 : 9;
                    e.target.classList.add('active');
                    break;
                case 'ArrowDown':
                    e.target.value = e.target.value > 0 ? e.target.value * 1 - 1 : 0;
                    if (e.target.value === 0) {
                        e.target.classList.remove('active');
                    }
                    break;
                case 'ArrowRight':
                    break;
                case 'ArrowLeft':
                    break;
                default:
                    if (e.target.value.length > 0 && e.key != 'Tab') {
                        e.target.classList.add('active');
                        if (e.target.nextElementSibling) {
                            e.target.nextElementSibling.focus();
                        }
                    } else {
                        if (e.target.value == '' && e.key != 'Tab') {
                            e.target.classList.remove('active');
                            if (e.target.previousElementSibling) {
                                e.target.previousElementSibling.focus();
                            }
                        }
                    }
                    break;
            }
        })
    })
    /* 思路：通过监听键盘事件的按键值来触发事件和修改样式 */