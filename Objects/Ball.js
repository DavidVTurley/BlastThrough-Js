class BallObject extends GameObject{
    /**
    * @description Places the center of the this at position.
    */
    constructor(position, size, initialSpeed){
        super(position, size, size, true, "square", createVector(0, 1, 0), initialSpeed);
    }

    Update(player){
        if(this.CheckCollision(player)){
            this.Bottom = player.Top + -1;
            let newDirection = GetVectorToObject(player.Position, this.Position).normalize();
            newDirection = createVector(newDirection.x * this.Speed, newDirection.y * this.Speed, newDirection.z * this.Speed);
            if(newDirection.y > -0.5){
                newDirection.y = -0.5 * this.Speed;
            }
            this.Direction = newDirection;
        }
        this.DetectWallCollision();
        this.Position.add(this.Direction);
    }

    Draw(){
        this.DrawSelfSquare();
    }

    DetectCollisionWithTile(tile){
        if(!this.CheckCollision(tile)) return false;
        let angleToObject = GetAngleToObject(tile.Position, this.Position);
        // bottom
        if(angleToObject <= -45 && angleToObject >= -135){
            this.Direction = InvertVectorY(this.Direction);
            //console.log("Bottom");
        }      
        // top
        else if(angleToObject <= 135 && angleToObject >= 45){
            this.Direction = InvertVectorY(this.Direction);
            //console.log("top");
        }                                  
        // Left
        else if(angleToObject <= -135 && angleToObject >= -175
            || angleToObject >= 135 && angleToObject <= 180){
            this.Direction = InvertVectorX(this.Direction);
            //console.log("Left");
        }
        // right
        else if(angleToObject <= 45 && angleToObject >= -45){
            this.Direction = InvertVectorX(this.Direction);
            //console.log("right");
        }

        return true;
    }
    DetectWallCollision(){
        // Walls
        if(this.Left < 0 ) {
            this.Direction = InvertVectorX(this.Direction);
            return false;
        }
        if(this.Right > CanvasWidth ) {
            this.Direction = InvertVectorX(this.Direction);
            return false;
        }
        if(this.Top < 0 ) {
            this.Direction = InvertVectorY(this.Direction);
            return false;
        }
        if(this.Bottom > CanvasHeight){
            this.Direction = createVector(0,0,0);  
        }
    }
}
