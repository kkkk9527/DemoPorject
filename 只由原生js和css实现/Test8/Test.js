let pageHeigh = window.innerHeight;
if (typeof pageHeigh != "number") {
    if (document.compatMode == "CSS1Compat") {
        pageHeigh = document.documentElement.clientHeight
    } else {
        pageHeigh = document.body.clientHeight;
    }
}
init();

function getBottompositition() {
    let myDiv = document.getElementsByClassName("div1");
    if (myDiv.length != 0) {
        let divheight = myDiv[myDiv.length - 1].offsetTop;
        return (pageHeigh + window.scrollY - divheight);
    } else {
        return pageHeigh;
    }
}

function removeOrShowBox() {
    if (getBottompositition() > 320) {
        let myDiv = document.getElementsByClassName("div1");
        if (myDiv.length % 2 != 0) {
            if (document.querySelector('.div2')) {
                document.querySelector(".div2").className = "div1";
            }
        } else {
            if (document.querySelector('.div3')) {
                document.querySelector(".div3").className = "div1";
            }
        }
    } else if (getBottompositition() < 160) {
        let myDiv = document.getElementsByClassName("div1");
        if (myDiv.length % 2 != 0) {
            myDiv[myDiv.length - 1].className = "div3";
        } else {
            myDiv[myDiv.length - 1].className = "div2";
        }
    }
}

window.addEventListener("scroll", () => {
    removeOrShowBox();
});

function init() {
    let div = document.getElementsByTagName("div");
    for (let i = 0, a = div.length; i < a; i++) {
        if (div[i].className != "div1" && getBottompositition() > 320)
            div[i].className = "div1";
    }
}