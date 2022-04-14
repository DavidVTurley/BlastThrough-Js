class BallObject{
    /**
    * @description Places the center of the ball at position.
    */
    constructor(x ,y, size){
        let middle = size/2;

        this.Size = size;
        this.Position = createVector(x - middle, y - middle, 0)
        this.Direction = createVector(0, 1, 0);
        this.Speed = 3;
        this.Direction.mult(this.Speed);

        Object.defineProperties(this, {
            XLeftBound: {
                get: function() {
                    return this.Position.x - size/2;
                },
                set: function(value){
                    this.Position.x += value;
                },
                configurable: true
            }
        });   
        Object.defineProperties(this, {
            XRightBound: {
                get: function() {
                    return this.Position.x + size/2;
                },
                set: function(value){
                    this.Position.x += value;
                },

                configurable: true
            }
        });   
        Object.defineProperties(this, {
            YTopBound: {
                get: function() {
                    return this.Position.y - size/2;
                },
                set: function(value){
                    this.Position.y += value;
                },

                configurable: true
            }
        });   
        Object.defineProperties(this, {
            YBottomBound: {
                get: function() {
                    return this.Position.y + size/2;
                },
                set: function(value){
                    this.Position.y += value;
                },

                configurable: true
            }
        });   

    }

    Update(playerPaddle){
        this.DetectCollision(playerPaddle);
        this.Position.add(this.Direction);
    }

    Draw(){
        rect(this.XLeftBound, this.YTopBound, this.Size, this.Size);
    }

    DetectCollision(player){
        // Walls
        if(this.XLeftBound < 0 ) {
            this.Direction = InvertVectorX(this.Direction);
            return false;
        }
        if(this.XRightBound > CanvasWidth ) {
            this.Direction = InvertVectorX(this.Direction);
            return false;
        }
        if(this.YTopBound < 0 ) {
            this.Direction = InvertVectorY(this.Direction);
            return false;
        }
        if(this.YBottomBound > CanvasHeight){
            this.Direction = createVector(0,0,0);  
        }
        // Player
        if(this.YTopBound >= player.Position.y
            && this.YBottomBound >= player.Position.y
            && this.XLeftBound >= player.XLeftBound
            && this.XRightBound <= player.XRightBound){
            this.Direction = InvertVectorY(GetNormalizedVectorFromObjects(this.Position, player.Position));
            if(this.Direction.y <= -10) {
                this.Direction.y = -10
                console.log("Smaller than -5")
            }
            this.Direction.mult(this.Speed);
        }
    }
}
