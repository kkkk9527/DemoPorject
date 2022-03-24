/**
 * @param {string} s
 * @return {number}
 * 思路：通过将每个罗马数字与其右边的数字进行比较来得出该数字应该是正数还是负数，再将这些数字相加就行了
 */
var romanToInt = function(s) {
    let romanChar = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let arr = s.split(''),
        sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index + 1]) {
            if (romanChar[arr[index]] >= romanChar[arr[index + 1]]) {
                sum += romanChar[arr[index]];
            } else {
                sum -= romanChar[arr[index]];
            }
        } else {
            sum += romanChar[arr[index]];
        }
    }
    return sum;
};