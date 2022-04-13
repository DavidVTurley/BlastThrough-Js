class PlayerCharachter{
    constructor(x, y, width = 100, height = 20, speed = 4){
        this.Width = width;
        this.Height = height;
        this.Speed = speed;

        // Recenter and adjust height
        this.XLeft = x - (this.Width/2);
        this.Y = y - this.Height - 5;

        Object.defineProperties(this, {
            XRight: {
                get: function() {
                    return this.XLeft + this.Width;
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
