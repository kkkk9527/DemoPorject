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
    // 创建元素
    let innerDiv = document.createElement('div'), //卡片内层
        userAvatar = document.createElement('div'), //用户头像区
        avatar = document.createElement('div'), //用户头像
        userInfomation = document.createElement('div'), //用户信息
        msgContent_information = document.createElement('div'), //用户fan区
        msgContent_repos = document.createElement('div') //用户仓库链接区
        /* 添加类名 */
    innerDiv.classList.add('innerContent'); //卡片内层
    userAvatar.classList.add('userAvatar'); //用户头像区
    avatar.classList.add('avatar'); //用户头像
    userInfomation.classList.add('userInfomation'); //用户信息
    msgContent_information.classList.add('msgContent'); //用户fan区
    msgContent_information.classList.add('information'); //用户fan区
    msgContent_repos.classList.add('msgContent'); //仓库区
    msgContent_repos.classList.add('repos');

    /* 搭建模型 */
    avatar.setAttribute('style', `background-image: url("${userData.avatar_url}")`);
    userAvatar.appendChild(avatar); //用户头像区添加头像

    let userInfo1 = [userData.followers + ' followers', userData.following + ' following', userData.public_repos + ' repo'] //用户信息区第三行数据
    let userInfo2 = [userData.name || 'null', userData.bio || 'null'];


    /* 添加用户基本参数 */
    for (let index = 0; index < userInfo1.length; index++) {
        let msgContentDiv_1 = document.createElement('div'); //用户参数
        msgContentDiv_1.innerText = userInfo1[index];
        msgContent_information.appendChild(msgContentDiv_1);
    }
    /* 添加用户仓库地址 */
    for (let index = 0; index < ropsData.length; index++) {
        let repo = document.createElement('a'); //用户仓库链接
        repo.setAttribute('href', ropsData[index].html_url);
        repo.innerText = ropsData[index].name;
        msgContent_repos.appendChild(repo);
    }
    /* 添加用户基本信息 */
    for (let index = 0; index < userInfo2.length; index++) {
        let msgContent = document.createElement('div'); //用户内容
        msgContent.classList.add('msgContent'); //用户内容
        msgContent.innerText = userInfo2[index];
        userInfomation.appendChild(msgContent);
    }
    // 添加节点
    userInfomation.appendChild(msgContent_information);
    userInfomation.appendChild(msgContent_repos);
    innerDiv.appendChild(userAvatar);
    innerDiv.appendChild(userInfomation);

    return innerDiv;
}

let searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', function(event) {
    let userCardOuter = document.querySelector('.userCardOuter');
    if (event.key.toString() == 'Enter') {
        if (userCardOuter.firstChild) {
            userCardOuter.removeChild(userCardOuter.firstChild);
        }
        let url = getUserUrl(event.target.value);
        let rops = getRopsUrl(event.target.value);
        event.target.value = '';
        getUser(url).then((data) => {
            let userData = data;
            //console.log(userData);
            getUser(rops).then((data) => {
                let ropsData = data;
                userCardOuter.appendChild(createUserCard(userData, ropsData));
            })
        });
    }
})