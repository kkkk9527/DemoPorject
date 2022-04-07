let photos = document.querySelectorAll('.content'),
    button = document.querySelectorAll('.button');
for (let index = 0; index < button.length; index++) {
    button[index].addEventListener('click', (e) => {
        button.forEach(element => {
            if (element.className.search('active') != -1) {
                element.classList.replace('active', 'notActive');
            }
        });
        photos.forEach(photo => {
            photo.classList.remove('show');
        })
        button[index].classList.replace('notActive', 'active');
        photos[index].classList.add('show');
    })
}