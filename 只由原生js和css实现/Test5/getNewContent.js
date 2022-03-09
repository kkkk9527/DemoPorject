function getNewContent() {
    let request = getHTTPObject();
    if (request) {
        request.open("GET", "1.txt", true);
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                let pare = document.createElement('p');
                let txt = document.createTextNode(request.responseText);
                pare.appendChild(txt);
                document.getElementById('new').appendChild(pare);
            }
        };
        request.send(null);
    } else {
        alert('浏览器不支持XMLHttpRequest')
    }
}
addLoadEvent(getNewContent);