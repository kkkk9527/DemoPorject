let input = document.querySelectorAll('input');
input.forEach((element, index) => {
    element.addEventListener('keydown', (e) => {
        if (e.target.value.length > 0 && e.target.nextElementSibling) {
            // console.log(e.target.nextElementSibling)
            console.log(e.target.keyCode)
            e.target.nextElementSibling.focus();
        } else {
            if (e.target.value == '') {
                e.target.previousElementSibling.focus();
            }
        }
    })
})
let a = document.getElementById('sd');
// a.previousSibling