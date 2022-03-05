function showCount(element, totalCount, time) {
    let stepCount = totalCount / time;
    let sum = 0,
        totalTime = 0;
    let a = setInterval(() => {
        element.innerText = sum;
        totalTime += 1;
        sum += stepCount;
        if (totalTime > time) {
            clearInterval(a);
        }
    }, 1)
}

let arr = [12000, 5000, 7000]
let pElement = document.getElementsByClassName("count");
for (let i = 0; i < pElement.length; i++) {
    showCount(pElement[i], arr[i], 200);
}