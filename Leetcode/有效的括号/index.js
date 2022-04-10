/**
 * 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = new Array(),
        IsValid = true;
    for (const index in s) {
        if (IsValid) {
            if (s[index] == '(' || s[index] == '{' || s[index] == '[') {
                arr.push(s[index])
            } else {
                switch (s[index]) {
                    case ')':
                        {
                            IsValid = arr.pop() == '(' ? true : false;
                            break;
                        }
                    case '}':
                        {
                            IsValid = arr.pop() == '{' ? true : false;
                            break;
                        }
                    case ']':
                        {
                            IsValid = arr.pop() == '[' ? true : false;
                            break;
                        }
                }
            }
        } else break;

    }
    if (arr.length > 0) {
        IsValid = false;
    }
    return IsValid;
};
/* 
 *  思路：遍历字符串的每个字符，若是左括号则将该括号添加进数组末尾，若是右括号
 *       则弹出数组的末尾元素并比较，若不是有效的括号则返回flase并中断遍历。
 *       遍历完成后检查数组长度，若大于0则返回flase，否则返回true；
 */