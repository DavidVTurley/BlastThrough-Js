let PlayerPaddle;
let Ball;
let Tile;
const CanvasWidth = 500;
const CanvasHeight = 500;

function setup(){
    createCanvas(CanvasWidth, CanvasHeight);
    PlayerPaddle = new Player(createVector(CanvasWidth / 2, CanvasHeight - 25, 0), 100, 20, 3, true, "square");
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
    let tileHit = false;
    for(let y = 0; y < Tile.length; y++){
        for(let x = 0; x < Tile[y].length; x ++){
            Tile[y][x].Update(Ball);
            if(Ball.DetectCollisionWithTile(Tile[y][x])){
                Tile[y][x].Visible = false;
                Tile[y][x].HitBox = false;
                if(!tileHit){
                    let angleToObject = GetAngleToObject(Tile[y][x].Position, Ball.Position);
                    console.log(angleToObject);
                    // bottom
                    if(angleToObject <= -45 && angleToObject >= -135){
                        Ball.Direction = InvertVectorY(Ball.Direction);
                        console.log("Bottom");
                    }      
                    // top
                    else if(angleToObject <= 135 && angleToObject >= 45){
                        Ball.Direction = InvertVectorY(Ball.Direction);
                        console.log("top");
                    }                                  
                    // Left
                    else if(angleToObject <= -135 && angleToObject >= -175
                        || angleToObject >= 135 && angleToObject <= 180){
                        Ball.Direction = InvertVectorX(Ball.Direction);
                        console.log("Left");
                    }
                    // right
                    else if(angleToObject <= 45 && angleToObject >= -45){
                        Ball.Direction = InvertVectorX(Ball.Direction);
                        console.log("right");
                    }
                    tileHit = true;
                }
            }

            Tile[y][x].Draw();
        }
    } 
    PlayerPaddle.Update();
    PlayerPaddle.Draw();
    Ball.Update(PlayerPaddle);
    Ball.Draw();

}