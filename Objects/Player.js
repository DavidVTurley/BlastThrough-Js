class Player extends GameObject{
    constructor(position, width, height, speed, hasHitBox = true, shapeType = "Square"){
        super(position, width, height, hasHitBox, shapeType);
        this.Speed = speed;
    }     

    Update(){      
        
        if(keyIsPressed){
            if(keyIsDown(LEFT_ARROW)){
                this.Position.x -= this.Speed;
            }
            if(keyIsDown(RIGHT_ARROW)){
                this.Position.x += this.Speed;
            }
        }

        this.DetectColisionWithSides();
    }

    Draw(){
        this.DrawSelfSquare();
    }

    
    DetectColisionWithSides(){
        if(this.Position.x < 0) {
            this.Position.x = 0;
        }

        if(this.Position.x > CanvasWidth) 
        {
            this.Position.x = CanvasWidth;  
        }
    }
}
