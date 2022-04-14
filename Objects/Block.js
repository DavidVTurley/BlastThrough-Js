class Block{
    constructor(x ,y, width, height){
        this.Shape = new Rectangle(x, y, 0, width, height);
    }

    Update(playerPaddle){

    }

    Draw(){
        this.Shape.Draw();
    }

    DetectHitWithBall(balls){
        balls.forEach(ball => {
            if(
                
            ){
                
            }
        });
    }

}