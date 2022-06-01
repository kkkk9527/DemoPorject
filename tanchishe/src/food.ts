class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }
    getX(): number {
        return this.element.offsetLeft;
    }
    getY(): number {
        return this.element.offsetTop;
    }
    changePosition(): void {
        this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px';
        this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px';
    }
}

export default Food