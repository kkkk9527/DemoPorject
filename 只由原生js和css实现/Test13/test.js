let a = document.getElementById("innerBox2");
a.addEventListener('click', () => {
    let panel = document.getElementById("panel");
    let panel1 = document.getElementById("panel1");
    if (panel) {
        panel.id = "panel1";
        let innerBox = document.getElementById("innerBox1");
        innerBox.id = "innerBox11";
        let line = document.getElementsByClassName("innerLine");
        for (let i = 0; i < 2; i++) {
            line[i].id += `${i+1}`;
        }
    }
    if (panel1) {
        panel1.id = "panel";
        let innerBox = document.getElementById("innerBox11");
        innerBox.id = "innerBox1";
    }
});