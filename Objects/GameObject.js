class GameObject{
    constructor(position, width, height, hasHitBox = true, shapeType = "square", direction = createVector(0,0,0), initialSpeed = 0){
        this.Position = position;
        this.Width = width;
        this.Height = height;
        this.HitBox = hasHitBox;
        this.shapeType = shapeType
        this.Speed = initialSpeed;
        this.Direction = direction;

        this.Direction.mult(this.Speed);
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
        if(this.HitBox == false || gameObject.HitBox == false){
            return false;
        }
        if(this.shapeType == "square"){
            if(gameObject.shapeType == "square"){

                return this.Left <= gameObject.Right
                && this.Right >= gameObject.Left
                && this.Top <= gameObject.Bottom
                && this.Bottom >= gameObject.Top;
            }
            else if(gameObject.shapeType == "elipse"){
                console.log("Square to Elipse collision not implemented yet");
                return false;
            }
        }
        else if(this.shapeType = "elipse"){
            console.log("Elipse to elips collision not implemented yet");
        }
    }

    DrawSelfSquare(){
        rect(this.Position.x - (this.Width/2), this.Position.y - (this.Height/2), this.Width, this.Height);
    }
}

