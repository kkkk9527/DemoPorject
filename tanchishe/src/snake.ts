export default class snake {
    sankeElement: HTMLElement
    snakeHead: HTMLElement


    constructor() {
        this.sankeElement = document.querySelector('.snake')!;
        this.snakeHead = document.querySelector('.head')!;
    }
    // 蛇位置
    getX() {
        return this.snakeHead.offsetLeft;
    }
    getY() {
        return this.snakeHead.offsetTop;
    }

    // 蛇移动
    moveTo(direction: string, border: Array<number>): boolean {
        let bool = true;
        switch (direction) {
            case 'ArrowUp':
                if (this.getY() - 10 > border[0]) {
                    this.snakeBodyMove();
                    this.snakeHead.style.top = this.getY() - 10 + 'px';
                    bool = this.isBumpOwn();
                } else bool = false;
                break;
            case 'ArrowDown':
                if (this.getY() + 10 < border[1]) {
                    this.snakeBodyMove();
                    this.snakeHead.style.top = this.getY() + 10 + 'px';
                    bool = this.isBumpOwn();
                } else bool = false;
                break;
            case 'ArrowLeft':
                if (this.getX() - 10 > border[0]) {
                    this.snakeBodyMove();
                    this.snakeHead.style.left = this.getX() - 10 + 'px';
                    bool = this.isBumpOwn();
                } else bool = false;
                break;
            case 'ArrowRight':
                if (this.getX() + 10 < border[1]) {
                    this.snakeBodyMove();
                    this.snakeHead.style.left = this.getX() + 10 + 'px';
                    bool = this.isBumpOwn();
                } else bool = false;
                break;
        }
        return bool;
    }

    // 蛇吃食物
    eat(foodPosition: string): boolean {
        let snakePosition = this.getX().toString() + this.getY().toString();
        if (snakePosition === foodPosition) {
            return true;
        }
        return false;
    }

    // 蛇身体长长
    snakeGrow() {
        let div = document.createElement('div');
        this.sankeElement.appendChild(div);
        div.style.left = this.getX() + 'px';
        div.style.top = this.getY() + 'px';
    }
    // 蛇身体移动
    snakeBodyMove() {
        let elements = this.sankeElement.children;
        if (elements.length > 1) {
            for (let index = elements.length; index > 1; index--) {
                (elements[index - 1] as HTMLElement).style.left = (elements[index - 2] as HTMLElement).style.left;
                (elements[index - 1] as HTMLElement).style.top = (elements[index - 2] as HTMLElement).style.top;
            }
        }
    }
    // 是否撞到自己
    isBumpOwn(): boolean {
        let elements = this.sankeElement.children,
            bool = true;
        if (elements.length > 4) {
            for (let index = 3; index < elements.length; index++) {
                if (this.getX() === (elements[index] as HTMLElement).offsetLeft && this.getY() === (elements[index] as HTMLElement).offsetTop) {
                    bool = false;
                    break;
                }
            }
        }
        return bool;
    }
}