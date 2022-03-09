let inputE = document.getElementsByClassName("myInput");
for (const a of inputE) {
    a.addEventListener('focusin', () => {
        if (!a.value) {
            let messageE = a.previousElementSibling;
            let childElement = getChildElement(messageE);
            for (let i = 0, count = childElement.length; i < count; i++) {
                setTimeout(() => { moveToY(childElement[i], 20, 0, 100) }, i * 75);
            }
        } else {
            let messageE = a.previousElementSibling;
            let childElement = getChildElement(messageE);
            for (let i = 0, count = childElement.length; i < count; i++) {
                childElement[i].top = 0;
            }
        }
    })
    a.addEventListener('blur', () => {
        if (!a.value) {
            let messageE = a.previousElementSibling;
            let childElement = getChildElement(messageE);
            for (let i = 0, count = childElement.length; i < count; i++) {
                setTimeout(() => { moveToY(childElement[i], 0, 20, 100) }, i * 75);
            }
        }
    })
}

/*
let a = document.getElementById("inputPwd");
if (a.nodeType == Node.ELEMENT_NODE) {
    console.log(a.className)
}
console.log(b.length);
let b = getChildElement(a);
*/
function moveToY(targetElement, nowPositionY, toWhereY, time) {
    targetElement.style.top = `${nowPositionY}px`;
    let distance = Math.abs(toWhereY - nowPositionY); //计算目标与现在位置的距离
    let mCount = 40; //设定移动次数
    let step = distance / mCount; //计算每次移动幅度
    let timeInterval = time / mCount; //计算移动时间间隔
    let count = 0;
    let move = setInterval(() => {
        if (count <= mCount) {
            targetElement.style.top = `${Math.abs(nowPositionY-count*step)}px`
            count++;
        } else {
            clearInterval(move);
        }
    }, timeInterval)
}

function getChildElement(element) {
    let childArray = new Array(),
        count = 0;
    if (element.childNodes.length != 0) {
        for (let i = 0, max = element.childNodes.length; i < max; i++) {
            if (element.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                childArray[count] = element.childNodes[i]
                count++;
            }
        }
    } else {
        return false;
    }
    return childArray;
}