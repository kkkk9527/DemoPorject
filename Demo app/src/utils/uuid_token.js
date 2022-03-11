import { v4 as uuidv4 } from 'uuid'
/*该文件用于生成游客的唯一ID  */
export const getUUID = () => {
    //获取localStorage中的uuid属性
    let uuid_token = localStorage.getItem('uuid_token');
    //如果没有值就生成新的uuid存入localStorage中
    if (!uuid_token) {
        uuid_token = uuidv4();
        localStorage.setItem('uuid_token', uuid_token);
    }
    return uuid_token;
}