let PlayerPaddle;
let Ball;
const CanvasWidth = 500;
const CanvasHeight = 500;

function setup(){
    createCanvas(CanvasWidth, CanvasHeight);
    PlayerPaddle = new PlayerCharachter(CanvasWidth/2, CanvasHeight);
}
function draw(){
    background(220);
    PlayerPaddle.Update();
    PlayerPaddle.Draw();
}

class PlayerCharachter{
    constructor(x, y, width, speed = 4){
        this.Width = width;
        this.Height = 20;
        this.Speed = speed;

        this.X = x;
        this.Y = y - this.Height -5;
    }

    Update(){
        if(keyIsPressed){
            if(keyIsDown(LEFT_ARROW)){
                this.X -= this.Speed;
            }
            if(keyIsDown(RIGHT_ARROW)){
                this.X += this.Speed;
            }
        }
    }

    Draw(){
        rect(this.X, this.Y, 100, 20);
    }

}

