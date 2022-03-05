const arr = ["applause"]
arr.forEach(Arr => {
    let b = document.getElementById("bt");
    b.addEventListener("click", () => {
        let c = document.getElementById("applause");
        c.pause();
        c.currentTime = 0;
        c.play();
    })
});