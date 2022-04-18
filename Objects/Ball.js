class BallObject extends RectangleObject{
    /**
    * @description Places the center of the this at position.
    */
    constructor(position, size, initialSpeed){
        super(position, size, size, true, createVector(0, 1, 0), initialSpeed);
        this.BouncedX = false;
        this.BouncedY = false;
    }

    Update(player){
        this.BouncedX = false;
        this.BouncedY = false;
        
        this.RespondCollisionWithSides(this.DetectColisionWithSides());
        if(this.CheckCollision(player)){
            this.Bottom = player.Top + -1;
            let newDirection = GetVectorToObject(player.Position, this.Position).normalize();
            newDirection = createVector(newDirection.x * this.Speed, newDirection.y * this.Speed, newDirection.z * this.Speed);
            if(newDirection.y > -0.5){
                newDirection.y = -0.5 * this.Speed;
            }
            this.Direction = newDirection;
        }
        this.Position.add(this.Direction);
    }

    Draw(){
        super.Draw();
    }

    RespondCollisionWithTile(tile){
        let angleToObject = GetAngleToObject(tile.Position, this.Position);
        if(!this.BouncedY){
            // bottom
            if(angleToObject <= -45 && angleToObject >= -135){
                this.Direction = InvertVectorY(this.Direction);
            }      
            // top
            else if(angleToObject <= 135 && angleToObject >= 45){
                this.Direction = InvertVectorY(this.Direction);
            }                  
        }
        if(!this.BouncedX){                
            // Left
            if(angleToObject <= -135 && angleToObject >= -175
                || angleToObject >= 135 && angleToObject <= 180){
                this.Direction = InvertVectorX(this.Direction);
            }
            // right
            else if(angleToObject <= 45 && angleToObject >= -45){
                this.Direction = InvertVectorX(this.Direction);
            }
        }
    }

    RespondCollisionWithSides(side){
        switch (side) {
            case "Left" || "Right":
                this.Direction = InvertVectorX(this.Direction);
                break;
            case "Top":
                this.Direction = InvertVectorY(this.Direction);
                break;
            case "Bottom":
                this.Direction = createVector(0,0,0);  
                break;
            default:
                break;
        }
    }
}
