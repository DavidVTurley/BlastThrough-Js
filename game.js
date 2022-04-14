let PlayerPaddle;
let Ball;
let Tile;
const CanvasWidth = 500;
const CanvasHeight = 500;

function setup(){
    createCanvas(CanvasWidth, CanvasHeight);
    PlayerPaddle = new PlayerCharachter(CanvasWidth/2, CanvasHeight);
    Ball = new BallObject(250, 250, 15);
    Tile = [];

    for(let y = 1; y <= 10; y++){
        Tile.push([]);
        for(let x = 1; x <= CanvasWidth / 21; x ++){
            Tile[y-1].push(new Block(20*x + 1, 20*y + 1, 20, 20));
        }
    }
}

function draw(){
    background(220);
    PlayerPaddle.Update();
    PlayerPaddle.Draw();
    Ball.Update(PlayerPaddle);
    Ball.Draw();

    for(let y = 0; y < Tile.length; y++){
        for(let x = 0; x < Tile[y].length; x ++){
            Tile[y][x].Draw();
        }
    }
}