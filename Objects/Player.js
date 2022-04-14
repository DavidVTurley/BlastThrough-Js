class PlayerCharachter{
    constructor(x, y, width = 100, height = 25, speed = 4){
        this.Width = width;
        this.Height = height;
        this.Speed = speed;

        this.Position = createVector(x, y - height, 0);
        

        Object.defineProperties(this, {
            XLeftBound: {
                get: function() {
                    return this.Position.x - (this.Width/2);
                },
                configurable: true
            }
        });   
        Object.defineProperties(this, {
            XRightBound: {
                get: function() {
                    return this.Position.x + (this.Width/2);
                },
                configurable: true
            }
        });   

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
        rect(this.XLeftBound, this.Position.y, this.Width, this.Height);
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
