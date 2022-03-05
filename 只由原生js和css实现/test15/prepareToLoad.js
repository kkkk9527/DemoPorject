function prepareToLoad() {
    if (!document.getElementsByClassName) return false;
    let message = document.getElementsByClassName('message');
    for (const myMessage of message) {
        myMessage.style.top = '0px'
    }
}