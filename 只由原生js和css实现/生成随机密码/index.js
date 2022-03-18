let panel1 = document.querySelectorAll('.panel1');
let botton = document.querySelector('.createPWd');
let copy = document.querySelector('.copy');
let span = document.querySelector('span');
let LowercaseLetters = 'qwertyuiopasdfghjklzxcvbmn';
let UppercaseLetters = LowercaseLetters.toUpperCase();
let Num = '0123456789';
let Symbols = '!@#$%^&*(){}[]=<>/,.';
let flag = {
        pwdNum: 20,
        uppercaseLetters: false,
        lowercaseLetters: false,
        numbers: false,
        symbols: false,
    }
    /* 设置生成密码的参数 */
for (let index = 0; index < panel1.length; index++) {
    panel1[index].addEventListener('change', (event) => {
        if (event.target.value * 1) {
            Object.assign(flag, { pwdNum: event.target.value });
        } else {
            switch (index) {
                case 1:
                    Object.assign(flag, { uppercaseLetters: event.target.checked ? true : false });
                    break;
                case 2:
                    Object.assign(flag, { lowercaseLetters: event.target.checked ? true : false });
                    break;
                case 3:
                    Object.assign(flag, { numbers: event.target.checked ? true : false });
                    break;
                case 4:
                    Object.assign(flag, { symbols: event.target.checked ? true : false });
                    break;
            }
        }
    })
}
/* 生辰密码 */
function cretePwd() {
    let str = [],
        rStr = '',
        flag1 = 0;
    let { pwdNum, uppercaseLetters, lowercaseLetters, numbers, symbols } = flag;
    if (uppercaseLetters) {
        str.push(UppercaseLetters);
        flag1++;
    }
    if (lowercaseLetters) {
        str.push(LowercaseLetters);
        flag1++;
    }
    if (numbers) {
        str.push(Num);
        flag1++;
    }
    if (symbols) {
        str.push(Symbols);
        flag1++;
    }
    if (flag1 > 0) {
        for (let index = 0; index < parseInt(pwdNum / flag1); index++) {
            for (let index = 0; index < flag1; index++) {
                rStr += str[index].charAt(parseInt(Math.random() * str[index].length));
            }
        }
        if (pwdNum % flag1) {
            for (let index = 0; index < pwdNum % flag1; index++) {
                rStr += str[index].charAt(parseInt(Math.random() * str[index].length));
            }
        }
    }
    return rStr;
}
/* 展示密码 */
botton.addEventListener('click', () => {
    span.innerText = cretePwd();
});
/* 复制密码 */
copy.addEventListener('click', () => {
    let input = document.createElement('input')
    input.value = span.innerText;
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy');
    document.body.removeChild(input)
})