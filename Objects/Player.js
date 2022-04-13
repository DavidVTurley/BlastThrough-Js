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
            //console.log("Moved");
            if(keyIsDown(LEFT_ARROW)){
                this.XLeft -= this.Speed;
            }
            if(keyIsDown(RIGHT_ARROW)){
                this.XLeft += this.Speed;
            }
        }

        this.DetectColisionWithSides();
    }

    Draw(){
        rect(this.XLeft, this.Y, 100, 20);
    }

    DetectColisionWithSides(){
        if(this.XLeft < 0) {
            this.XLeft = 0;
        }

        if(this.XRight > CanvasWidth) 
        {
            this.XLeft = CanvasWidth - this.Width;  
        }
    }
}
