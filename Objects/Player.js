class Player extends RectangleObject{
    constructor(position, width, height, speed, hasHitBox = true,){
        super(position, width, height, hasHitBox);
        this.Speed = speed;
        this.MousePosX = 0;
    }     

    Update(){      
        if(this.MousePosX != mouseX){
            this.Position.x = mouseX;
            this.MousePosX = mouseX;
        }
        else if(keyIsPressed){
            if(keyIsDown(LEFT_ARROW)){
                this.Position.x -= this.Speed;
            }
            if(keyIsDown(RIGHT_ARROW)){
                this.Position.x += this.Speed;
            }
        }

        switch (this.DetectColisionWithSides()) {
            case "Left":
                this.Position.x = 1;

                break;
        
            case "Right":
                this.Position.x = CanvasWidth-1;

                break;
        
            default:
                break;
        }
    }

    Draw(){
        super.Draw();
    }
}
