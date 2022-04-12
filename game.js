let PlayerPaddle;
const canvasWidth = 500;
const canvasHeight = 500;

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    PlayerPaddle = new PlayerCharachter(canvasWidth/2, canvasHeight, 100);
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

