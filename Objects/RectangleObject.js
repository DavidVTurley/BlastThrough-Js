class RectangleObject extends GameObject{
    constructor(position, width, height, hasHitBox = true, direction = createVector(0,0,0), initialSpeed = 0){
        super(position, width, height, hasHitBox, direction, initialSpeed);
    }

    Draw(){
        rect(this.Left, this.Top, this.Width, this.Height);
    }
    CheckCollision(gameObject){
            return this.Left <= gameObject.Right
            && this.Right >= gameObject.Left
            && this.Top <= gameObject.Bottom
            && this.Bottom >= gameObject.Top;
    }

    DetectColisionWithSides(){
        if(this.Left <= 0) {
            return "Left";
        }
        if(this.Right > CanvasWidth) 
        {
            return "Right";
        }
        if(this.Top <= 0){
            return "Top";
        }
        if(this.Bottom <= 0){
            return "Bottom";
        }
    }
}