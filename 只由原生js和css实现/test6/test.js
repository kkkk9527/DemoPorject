function showPic(src, jieshao) {
    let picBox = document.querySelector("img");
    let placeholder = document.getElementById("placeHolder");
    picBox.setAttribute("src", src);
    placeholder.firstChild.nodeValue = jieshao;
}

function changeElement() {

}
let pic = document.getElementsByClassName("picShow");
for (const a of pic) {
    a.addEventListener("click", function(event) {
        let Src = a.getAttribute("href");
        let Jieshao = a.getAttribute("title");
        showPic(Src, Jieshao);
        event.preventDefault();
    })
}
/*
let a = document.getElementById("s1");
a.addEventListener('click', (e) => {
    let b = a.getAttribute("href");
    let picBox = document.querySelector("img");
    picBox.setAttribute("src", b);
    e.preventDefault();
}, false)
*/