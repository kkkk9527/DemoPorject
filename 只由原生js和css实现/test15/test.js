let smallCup = document.getElementById("panel3").children;
let targetElement1 = document.getElementById("textShow1");
let targetElement2 = document.getElementById("textShow2");
console.log(targetElement1.lastElementChild.tagName);
for (const a of smallCup) {
    a.addEventListener("click", () => {
        if (a.className == "smallCup") {
            a.className = "smallCupFill";
            let str = "smallCupFill";
            changePreviousElement(a, str);
            checkState(a, targetElement1, targetElement2);
        } else {
            if (a.nextElementSibling && a.nextElementSibling.className == "smallCupFill") {
                let str = "smallCup";
                changeNextElementClassName(a, str);
                checkState(a, targetElement1, targetElement2);
            } else if (a.nextElementSibling && a.nextElementSibling.className == "smallCup") {
                a.className = "smallCup";
                a.lastElementChild
                checkState(a, targetElement1, targetElement2);
            } else {
                return false;
            }
        }
    });
}

function changeNextElementClassName(element, className) {
    if (element.nextElementSibling) {
        element.nextElementSibling.className = className;
        return changeNextElementClassName(element.nextElementSibling, className);
    } else {
        return false;
    }
}

function changePreviousElement(element, className) {
    if (element.previousElementSibling) {
        element.previousElementSibling.className = className;
        return changePreviousElement(element.previousElementSibling, className);
    } else {
        return false;
    }
}

function checkState(element, targetElement1, targetElement2) {
    let parentElement = element.parentElement;
    let count = 0;
    for (const childElement of parentElement.children) {
        if (childElement.className == "smallCupFill") {
            count++;
        }
    }
    targetElement1.setAttribute("style", `height:${100-12.5*count}%`);
    targetElement1.firstElementChild.innerText = `${2-0.25*count}L`;
    targetElement2.setAttribute("style", `height:${0+12.5*count}%`);
    targetElement2.firstElementChild.innerText = `${0+12.5*count}%`;
    if (count == 0) {
        setTimeout(() => { targetElement2.firstElementChild.setAttribute("style", `opacity: 0;`) }, 200);
        targetElement2.firstElementChild.innerText = `${12.5}%`
    } else if (count != 0 && count != 8) {
        targetElement2.firstElementChild.removeAttribute("style");
        targetElement1.lastElementChild.removeAttribute("style")
    } else {
        targetElement2.firstElementChild.removeAttribute("style");
        targetElement1.lastElementChild.setAttribute("style", `opacity: 0;`);
    }
}