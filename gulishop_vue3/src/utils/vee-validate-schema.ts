/* 表单校验规则 */
export default {
    pwd: '',
    tel(value:string):string|boolean {
        if (/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value)) {
            return true;
        }
        return '手机格式错误'
    },
    code(value:string):string|boolean {
        if (/[0-9]{6}/.test(value)) {
            return true;
        }
        return '请填写验证码'
    },
    isCheck(value:string):string|boolean {
        if (value) {
            console.log(1);
            return true
        }
        console.log(2);
        return '请勾选'
    }
}