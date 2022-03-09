let shiZhen = document.getElementById("shi");
let fenZhen = document.getElementById("fen");
let miaoZhen = document.getElementById("miao");
let but = document.getElementById("butt");
let myDate1 = new Date();
let milliseconds = myDate1.getMilliseconds();
let b = setTimeout(function() {
    setInterval(() => {
        let myDate = new Date();
        let secTime = myDate.getSeconds();
        let minTime = myDate.getMinutes();
        let hourTime = myDate.getHours();
        let arr = getDeg(secTime, minTime, hourTime);
        miaoZhen.setAttribute("style", `transform: translate(-50%,-50%) rotate(${-90+arr[0]}deg)`);
        fenZhen.setAttribute("style", `transform: translate(-50%,-50%) rotate(${-90+arr[1]}deg)`);
        shiZhen.setAttribute("style", `transform: translate(-50%,-50%) rotate(${-90+arr[2]+minTime/60*30}deg)`);
    }, 1000)
}, 1000 - milliseconds);


function getDeg(secTime, minTime, hourTime) {
    let arr = new Array();
    let secDeg = secTime / 60 * 360;
    let minDeg = minTime / 60 * 360;
    let hourDeg = hourTime / 12 * 360;
    arr[0] = secDeg;
    arr[1] = minDeg;
    arr[2] = hourDeg;
    return arr;
}