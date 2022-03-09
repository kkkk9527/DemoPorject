window.addEventListener("keydown", (event) => {
    let textShow = document.getElementById("but"),
        eventShow = document.getElementsByClassName("eventShow"),
        showPanel = document.getElementsByClassName("showPanel");
    textShow.setAttribute("style", "display:none;")
    let eventArr = [event.key, event.keyCode, event.code]
    for (const ShowPanel of showPanel) {
        ShowPanel.setAttribute("style", "display:unset;")
    }
    for (let i = 0; i < eventShow.length; i++) {
        eventShow[i].innerText = eventArr[i];
    }
});