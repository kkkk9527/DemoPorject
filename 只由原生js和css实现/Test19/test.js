let showText = document.getElementsByClassName("showText1")
for (const show of showText) {
    show.addEventListener("click", () => {
        show.firstElementChild.lastElementChild.className = "fas fa-times";
    })
}