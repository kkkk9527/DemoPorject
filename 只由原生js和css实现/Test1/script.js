const panels = document.querySelectorAll('.panel');
for (const panel of panels) {
    panel.addEventListener('click', () => {
        panel.re
    })
}
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};