class BallObject extends GameObject{
    /**
    * @description Places the center of the ball at position.
    */
    constructor(position, size, initialSpeed){
        super(position, size, size, true, "square", createVector(0, 1, 0), initialSpeed);
    }

    Update(player){
        if(this.CheckCollision(player)){
            this.Bottom = player.Top + 1;
            let newDirection = GetVectorToObject(player.Position, this.Position).normalize();
            this.Direction = createVector(newDirection.x * this.Speed, newDirection.y * this.Speed, newDirection.z * this.Speed);
        }
        this.DetectWallCollision();
        this.Position.add(this.Direction);
    }

    Draw(){
        this.DrawSelfSquare();
    }

    DetectCollisionWithTile(tile){
        return this.CheckCollision(tile);
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
