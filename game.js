let PlayerPaddle;
let Ball;
let Tile;
const CanvasWidth = 500;
const CanvasHeight = 500;

function setup(){
    frameRate(30)
    createCanvas(CanvasWidth, CanvasHeight);
    PlayerPaddle = new Player(createVector(CanvasWidth / 2, CanvasHeight - 25, 0), 100, 20, 3, true);
    Ball = new BallObject(createVector(250, 300, 0), 15, 3);
    Tile = [];
    for(let y = 1; y <= 10; y++){
        Tile.push([]);
        for(let x = 1; x <= CanvasWidth / 21; x ++){
            Tile[y-1].push(new Block(createVector(20*x + 1*x, 20*y + 5*y), 20, 20));
        }
    }
}

function draw(){
    background(220);
    for(let y = 0; y < Tile.length; y++){
        for(let x = 0; x < Tile[y].length; x ++){
            theTile = Tile[y][x];
            if(Ball.CheckCollision(theTile)){
                theTile.Visible = false;
                theTile.HitBox = false;
                Ball.RespondCollisionWithTile(theTile);
                tileHit = true;
            }

            theTile.Draw();
        }
    } 
    PlayerPaddle.Update();
    PlayerPaddle.Draw();
    Ball.Update(PlayerPaddle);
    Ball.Draw();

}