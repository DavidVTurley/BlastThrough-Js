class GameObject{
    constructor(position, width, height, hasHitBox = true, direction = createVector(0,0,0), initialSpeed = 0, visible = true, colour = undefined){
        if(this.constructor === GameObject) {
            throw new Error("GameObject is an abstract class.");
        }

        this.Position = position;
        this.Width = width;
        this.Height = height;
        this.HitBox = hasHitBox;
        this.Speed = initialSpeed;
        this.Direction = direction;
        this.Direction.mult(this.Speed);
        this.Visible = visible;
        console.log(colour)
        if(colour == undefined) this.Colour = Colours.Black;
        else  this.Colour = colour;
        
        Object.defineProperties(this, {
            Top: {
                get: function() {
                    return this.Position.y - (this.Height/2);
                },
                set: function(value){
                    this.Position.y = value + (this.Height/2)
                },
                configurable: true
            }
        });   
        Object.defineProperties(this, {
            Bottom: {
                get: function() {
                    return this.Position.y + (this.Height/2);
                },
                set: function(value){
                    this.Position.y = value - (this.Height/2)
                },
                configurable: true
            }
        });   
        Object.defineProperties(this, {
            Left: {
                get: function() {
                    return this.Position.x - (this.Width/2);
                },
                set: function(value){
                    this.Position.x = value - (this.Width/2)
                },
                configurable: true
            }
        });   
        Object.defineProperties(this, {
            Right: {
                get: function() {
                    return this.Position.x + (this.Width/2);
                },
                set: function(value){
                    this.Position.y = value + (this.Width/2)
                },
                configurable: true
            }
        });   

    }

    CheckCollision(gameObject){
        if(this.HitBox == false || gameObject.HitBox == false) return false;
    }

    Move(){
        
    }

    Update (){

    }

    Draw(){
        
    }
}

