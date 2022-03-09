function CreateElement(name, id, elementclass) {
    if (!document.createElement) { return false; }
    let element = document.createElement(name);
    if (id) { element.setAttribute("id", id); }
    if (elementclass) { element.setAttribute("class", elementclass); }
}

function insertAfter(targetElement, element) {
    if (targetElement == targetElement.parentElement.lastChild) {
        targetElement.parentElement.appendChild(element);
    } else {
        targetElement.parentElement.insertBefore(element, targetElement.nextSibling)
    }
}

function createAndInsertElement() {
    if (!document.createElement) { return false; }
    let imgElement = document.createElement('img');
    let explainElement = document.createElement('p');
    let info1 = [
        ['id', 'showPicture'],
        ['src', 'D:\\gitWorkSpace\\Test\\工作\\练习项目\\img\\empty.png']
    ];
    for (const Info of info1) {
        imgElement.setAttribute(Info[0], Info[1]);
    }
    explainElement.setAttribute('id', 'pictureExplain')
    explainElement.innerText = '选择图片';
    document.body.append(imgElement);
    document.body.append(explainElement);
}

function addEvent(elements) {
    if (!document.addEventListener) { return false; }
    for (const targetElement of elements) {
        targetElement.addEventListener("click", (event) => {
            let srcText = targetElement.getAttribute('href');
            let explainText = targetElement.getAttribute('title');
            let showPic = document.getElementById('showPicture');
            let explainPic = document.getElementById('pictureExplain');
            explainPic.innerText = explainText;
            showPic.setAttribute("src", srcText);
            event.preventDefault();
        });
    }
}

window.onload = createAndInsertElement();
let targetElements = document.getElementsByClassName('picShow');
addEvent(targetElements);