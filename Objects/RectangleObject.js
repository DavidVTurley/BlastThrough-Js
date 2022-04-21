class RectangleObject extends GameObject{
    constructor(position, width, height, hasHitBox = true, direction = createVector(0,0,0), initialSpeed = 0, visible = true){
        super(position, width, height, hasHitBox, direction, initialSpeed, visible);
    }

    Move(){
        this.Position.y += this.Speed;
    }

    Draw(){
        if(this.Visible){
            rect(this.Left, this.Top, this.Width, this.Height);
        }
    }

    Update(){

    }

    CheckCollision(gameObject){
            return this.Left <= gameObject.Right
            && this.Right >= gameObject.Left
            && this.Top <= gameObject.Bottom
            && this.Bottom >= gameObject.Top;
    }

    DetectColisionWithSides(){
        if(this.Left <= 0) {
            console.log("Left");
            return "Left";
        }
        if(this.Right > CanvasWidth) 
        {
            console.log("Right");
            return "Right";
        }
        if(this.Top <= 0){
            console.log("Top");
            return "Top";
        }
        if(this.Bottom <= 0){
            console.log("Bottom");
            return "Bottom";
        }
    }
}