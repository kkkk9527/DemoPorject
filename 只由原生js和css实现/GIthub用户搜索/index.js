/*封装XMLHttpRequest方法  */
function getUser(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status <= 300 || xhr.status == 304) {
                    return resolve(JSON.parse(xhr.responseText));
                } else {
                    return reject(xhr.status)
                }
            }
        };
    })
}
/* 设置搜索用户url */
function getUserUrl(name) {
    return `https://api.github.com/users/${name}`
}
/* 设置搜索用户仓库url */
function getRopsUrl(ropsname) {
    return `https://api.github.com/users/${ropsname}/repos?sort=created`
}
/* 创建用户卡片 */
function createUserCard(userData, ropsData) {
    /* 判断参数是否为对象 */
    if (userData.prototype.toString.call(obj) === '[object Object]') {
        // 创建元素
        innerDiv = document.createElement('div'), //卡片内层
            userAvatar = document.createElement('div'), //用户头像区
            avatar = document.createElement('div'), //用户头像
            userInfomation = document.createElement('div'), //用户信息
            msgContent = document.createElement('div'), //用户内容
            msgContentDiv = document.createElement('div'), //用户参数
            repo = document.createElement('a'); //用户仓库链接
        /* 添加类名 */
        innerDiv.classList.add('innerContent');
        userAvatar.classList.add('userAvatar');
        avatar.classList.add('avatar');
        userInfomation.classList.add('userInfomation');
        msgContent.classList.add('msgContent');

        /* 搭建模型 */
        let userCardOuter = document.querySelector('.userCardOuter');
        //userCardOuter.appendChild
        avatar.setAttribute('style', `background-image: url("${userData.avatar_url}")`)
        userAvatar.appendChild(avatar); //用户头像区添加头像
    }
}

let searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', function(event) {
    let userData = {};
    let ropsData = {};
    if (event.key.toString() == 'Enter') {
        let url = getUserUrl(event.target.value);
        let rops = getRopsUrl(event.target.value);
        event.target.value = '';
        getUser(url).then((data) => {
            userData = data;
            getUser(rops).then((data) => {
                ropsData = data
                console.log(ropsData);
                console.log(userData);
            })
        });
    }
})