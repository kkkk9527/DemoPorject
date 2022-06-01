import { Declaration } from 'postcss';
import Food from './food'
import Infomation from './infomation'
import Snake from './snake'

export default class controller {
    food: Food;
    infomation: Infomation;
    snake: Snake;
    direction: string;
    isAlive: boolean = true;

    constructor() {
        this.food = new Food();
        this.infomation = new Infomation();
        this.snake = new Snake();
        this.direction = 'ArrowRight';
    }
    // 初始化
    init() {
        document.addEventListener('keyup', this.debounce(this.changeDirection.call(this.event), 1000))
        /* document.addEventListener('keyup', (event) => {
            this.debounce(this.changeDirection(event), 3000)
        }) */
        this.run()
    }
    // 让蛇跑起来
    run() {
        this.isAlive = this.snake.moveTo(this.direction, [-10, 300]);
        this.EatFood();
        if (!this.isAlive) {
            alert("你死了")
        }
        setTimeout(() => {
            this.isAlive && this.run();
        }, 300 - this.infomation.getLevel() * 20)
    }
    // 修改前进方向
    changeDirection(event: KeyboardEvent) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            switch (this.direction) {
                case 'ArrowUp':
                    if (event.key === 'ArrowDown') {
                        this.direction = 'ArrowUp'
                    } else this.direction = event.key;
                    break;
                case 'ArrowDown':
                    if (event.key === 'ArrowUp') {
                        this.direction = 'ArrowDown'
                    } else this.direction = event.key;
                    break;
                case 'ArrowLeft':
                    if (event.key === 'ArrowRight') {
                        this.direction = 'ArrowLeft'
                    } else this.direction = event.key;
                    break;
                case 'ArrowRight':
                    if (event.key === 'ArrowLeft') {
                        this.direction = 'ArrowRight'
                    } else this.direction = event.key;
                    break;
            }
        }
    }
    // 判断是否吃到食物
    EatFood() {
        if (this.snake.getX() === this.food.getX() && this.snake.getY() === this.food.getY()) {
            this.food.changePosition();
            this.snake.snakeGrow();
            this.infomation.changeScore();
        }
    }
    debounce(fn: any, delay: number) {
        let timer: any = null;
        return function () {
            console.log(this.event)
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(fn, delay);
        }
    }
}