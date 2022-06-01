export default class infomation {
    private score: number;
    private level: number;
    private Score: HTMLElement;
    private Level: HTMLElement;


    constructor() {
        this.Score = document.getElementById('score')!;
        this.Level = document.getElementById('level')!;
        this.score = parseInt(this.Score.innerText);
        this.level = parseInt(this.Level.innerText);
    }
    // 加分
    changeScore(): void {
        this.score++;
        this.Score.innerText = this.score.toString();
        if (this.score % 2 === 0) {
            this.changeLevel();
        }
    }
    // 增加难度
    changeLevel(): void {
        if (this.level < 10) {
            this.level++;
        } else this.level = 10;
        this.Level.innerText = this.level.toString();
    }
    // 获取分数
    getScore(): number {
        return this.score;
    }
    // 获取难度级别
    getLevel(): number {
        return this.level;
    }
}