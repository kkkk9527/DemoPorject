let serialNumber = 0;
let info = {
    0: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\1.png)`,
    1: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\2.png)`,
    2: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\3.png)`,
    3: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\4.jpg)`,
    4: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\5.jpg)`,
    5: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\6.jpg)`,
    6: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\7.png)`,
    7: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\8.jpg)`,
    8: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\9.png)`,
    9: `background-image: url(D:\\\\gitWorkSpace\\\\Test\\\\工作\\\\练习项目\\\\img\\\\10.png)`
}
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let picShow = document.getElementsByClassName("picShow");
console.log(picShow.length);

prev.addEventListener("click", () => {
    serialNumber--;
    if (serialNumber == -1) {
        serialNumber = 9;
    }
    let count = 0;
    for (let div of picShow) {
        if (count == 0) {
            div.setAttribute(`style`, info[serialNumber]);
            count++
        } else {
            div.setAttribute(`style`, `${info[serialNumber]}; opacity: 0`);
            count = 0;
            setTimeout(() => {
                div.setAttribute(`style`, `${info[serialNumber]}; opacity: 1`);
            }, 100)
        }
    }
});
next.addEventListener("click", () => {
    let count = 0;
    serialNumber++;
    if (serialNumber == 10) {
        serialNumber = 0;
    }
    for (let div of picShow) {
        if (count == 0) {
            div.setAttribute(`style`, info[serialNumber]);
            count++
        } else {
            div.setAttribute(`style`, `${info[serialNumber]}; opacity: 0`);
            count = 0;
            setTimeout(() => {
                div.setAttribute(`style`, `${info[serialNumber]}; opacity: 1`);
            }, 100)
        }
    }
    console.log(serialNumber);
});