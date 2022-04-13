let PlayerPaddle;
let Ball;
const CanvasWidth = 500;
const CanvasHeight = 500;

function setup(){
    createCanvas(CanvasWidth, CanvasHeight);
    PlayerPaddle = new PlayerCharachter(CanvasWidth/2, CanvasHeight);
    Ball = new BallObject(250, 250, 15);
}

function draw(){
    background(220);
    PlayerPaddle.Update();
    PlayerPaddle.Draw();
    Ball.Update();
    Ball.Draw();
}

class PlayerCharachter{
    constructor(x, y, width = 100, height = 20, speed = 4){
        this.Width = width;
        this.Height = height;
        this.Speed = speed;

        // Recenter and adjust height
        this.XLeft = x - (this.Width/2);
        this.Y = y - this.Height - 5;

}