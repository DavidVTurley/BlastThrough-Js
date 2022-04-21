class BallObject extends RectangleObject{
    /**
    * @description Places the center of the this at position.
    */
    constructor(position, size, initialSpeed){
        super(position, size, size, true, createVector(0, 1, 0), initialSpeed);
        this.BouncedX = false;
        this.BouncedY = false;
    }

    Update(powerups, player, tiles){
        this.BouncedX = false;
        this.BouncedY = false;
        for(let y = 0; y < tiles.length; y++){
            for(let x = 0; x < tiles[y].length; x ++){
                let theTile = tiles[y][x];
                if(this.CheckCollision(theTile)){
                    this.RespondCollisionWithTile(theTile);
                }
            }
        } 
    

        this.RespondCollisionWitgSidesOfCanvas(this.DetectCollisionWithSideOfCanvasDirection());
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
        if(tile.HitBox){
            let angleToObject = GetAngleToObject(this.Position, tile.Position);
            tile.Visible = false;
            tile.HitBox = false;
            
            if(!this.BouncedY){
                // bottom
                if(angleToObject <= -45 && angleToObject >= -135){
                    this.Direction = InvertVectorY(this.Direction);
                }      
                // top
                else if(angleToObject <= 135 && angleToObject >= 45){
                    this.Direction = InvertVectorY(this.Direction);
                }    
                this.BouncedY = true;             
            }
            if(!this.BouncedX){                
                // Left
                if(angleToObject <= -135 && angleToObject >= -180
                    || angleToObject >= 135 && angleToObject <= 180){
                    this.Direction = InvertVectorX(this.Direction);
                }
                // right
                else if(angleToObject <= 45 && angleToObject >= -45){
                    this.Direction = InvertVectorX(this.Direction);
                }
                this.BouncedX = true;
            }
        }
    }
}
