class BallObject{
    constructor(x ,y, size){
        this.X = x;
        this.Y = x;
        this.Size = size;
        this.vector = createVector(-1, -1, 0)
    }

    Update(playerPaddle){
        console.log(this.X + "  " + this.Y);
        if(this.DetectCollision(playerPaddle)){
            this.Y += this.vector.y;
        }
    }

    Draw(){
        rect(this.X, this.Y, this.Size, this.Size);
    }

    DetectCollision(player){
        // Walls
        if(this.X < 0 ) {
            this.X = 1;
            this.WallCollision("Left");
            console.log("Left");
            return false;
        }
        if(this.X > CanvasWidth ) {
            this.X = CanvasWidth -1;
            this.WallCollision("Right");
            console.log("Right");
            return false;
        }
        if(this.Y < 0 ) {
            this.Y = 1;
            this.WallCollision("Top");
            console.log("Top");
            return false;
        }

        // Player
        ////////////////////////// Add Player Colliusion ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
        ////////////////////////// HERE ///////////////  
    }


    WallCollision(wallPosition){
        if(wallPosition == "Left"){
            this.vector.x *= -1;
        }
        else if(wallPosition == "Right"){
            this.vector.x *= -1;
        }
        else if(wallPosition == "Top"){
            this.vector.y *= -1;
        }
    }
}
