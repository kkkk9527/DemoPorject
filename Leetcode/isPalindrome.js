/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    /* 方法一 */
    let s = parseInt(x.split('').reverse().join(''));
    return s === x;
    /* 方法二 */
    /* let arr = x.toString().split('');
    let bool = false;
    if (arr.length == 1) {
        bool = true;
    }
    for (let index = 0; index < arr.length; index++) {
        if ((arr[index] == arr[arr.length - index - 1])) {
            bool = true;
        } else {
            bool = false;
            break;
        }
    }
    return bool; */
};