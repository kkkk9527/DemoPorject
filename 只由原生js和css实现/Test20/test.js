let textArea = document.getElementById("textInput");

textArea.addEventListener("keyup", (event) => {
    let panel = document.getElementById("showPanel2");
    if (panel.childElementCount == 0) {
        let newElement = document.createElement('div')
        newElement.className = "panel";
        newElement.innerText += event.key;
        panel.appendChild(newElement);
    } else {
        if (event.key != ",") {
            let lastChild = panel.lastElementChild;
            lastChild.className = "panel";
            lastChild.innerText += event.key;
        } else {
            let newElement = document.createElement('div')
            panel.appendChild(newElement);
        }
    }
});