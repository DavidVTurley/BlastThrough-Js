let PlayerPaddle;
let Ball;
let Tiles;
let PowerUps = [];
const CanvasWidth = 500;
const CanvasHeight = 500;

function setup(){
    //frameRate(30)
    createCanvas(CanvasWidth, CanvasHeight);
    
    PlayerPaddle = new Player(createVector(CanvasWidth / 2, CanvasHeight - 25, 0), 100, 20, Colours.Green);
    //console.log(Colours.Red)
    Ball = new BallObject(createVector(250, 300, 0), 15, 3, Colours.White);
    Tiles = [];
    for(let y = 1; y <= 10; y++){
        Tiles.push([]);
        for(let x = 1; x <= 10; x ++){
            Tiles[y-1].push(new Block(createVector(40*x + 4 + 20, 20*y), 40, 20, colour = Colours.Red));
            //console.log(Tiles[y-1][x-1].Colour)
        }
    }
}

function draw(){
    background(220);
    PlayerPaddle.Update();
    PlayerPaddle.Draw();
    Ball.Update(PowerUps, PlayerPaddle, Tiles);
    Ball.Draw();
    
    for(let y = 0; y < Tiles.length; y++){
        for(let x = 0; x < Tiles[y].length; x ++){
            theTile = Tiles[y][x];
            theTile.Draw();
        }
    } 
    PowerUps.filter(x => x != null && !x.CleanUp).forEach(pu => {
        pu.Move();
        
        pu.Update(PlayerPaddle);
        pu.Draw();    
    });
}