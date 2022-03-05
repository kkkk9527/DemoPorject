let a = document.getElementById('bt1');
a.addEventListener("click", () => {
    let b = document.getElementById('Text1');
    if (b.className == 'text1') {
        b.className = 'text2';
    } else {
        b.className = 'text1'
        b.focus();
    }
});