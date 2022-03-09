let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
bt1.addEventListener("click", () => {
    let a = document.getElementById("div2");
    let b = document.getElementById("body");
    let c = document.getElementById("ul2")
    a.id = "div3";
    b.id = "body1";
    c.id = "ul1";
    let d = document.getElementsByTagName('li');
    let e = ['list1', 'list2', 'list3'];
    for (let i = d.length, a = 0; a < i; a++) {
        d[a].id = e[a];
    }
});
bt2.addEventListener("click", () => {
    let a = document.getElementById("div3");
    let b = document.getElementById("body1");
    let c = document.getElementById("ul1")
    a.id = "div2";
    b.id = "body";
    c.id = "ul2";
});