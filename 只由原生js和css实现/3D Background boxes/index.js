let container = document.querySelector('.container'),
    button = document.querySelector('button'),
    x = -150;
//let image = document.querySelector('.imagebox')
//console.log(image.style.backgroundPositionX)
for (let index = 0; index < 4; index++) {
    for (let index1 = 0; index1 < 4; index1++) {
        let imagebox = CreateElement('div', ['imagebox']),
            topDiv = CreateElement('div', ['top']),
            bottom = CreateElement('div', ['bottom']);
        imagebox.style.backgroundPositionX = index1 * x + 'px';
        imagebox.style.backgroundPositionY = index * x + 'px';
        imagebox.append(topDiv, bottom);
        container.appendChild(imagebox);
    }
}

button.addEventListener('click', () => {
    let imagebox = document.querySelectorAll('.imagebox');
    imagebox.forEach(element => {
        if (element.className.indexOf('active') != -1) {
            element.classList.remove('active');
            container.classList.replace('large', 'small');
        } else {
            element.classList.add('active');
            container.classList.replace('small', 'large');
        }
        //console.log(element.className.indexOf('active'));
    });
})


function CreateElement(tagName, classList) {
    let element = document.createElement(tagName.toString());
    classList.forEach(className => {
        element.classList.add(className)
    });
    return element;
}