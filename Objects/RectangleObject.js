class RectangleObject extends GameObject{
    constructor(position, width, height, hasHitBox = true, direction = createVector(0,0,0), initialSpeed = 0, visible = true, colour = undefined){
        console.log(colour)

        super(position, width, height, hasHitBox, direction, initialSpeed, visible, colour);
    }

    Move(){
        this.Position.y += this.Speed;
    }

    Draw(){
        if(this.Visible){
            DrawRectangleFromGameObject(this, true);
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

    DetectColisionWithSidesOfCanvas(){
        return this.Left <= 0 || this.Right > CanvasWidth || this.Top <= 0 || this.Bottom <= 0;
    }

    DetectCollisionWithSideOfCanvasDirection(){
        if(this.Left <= 0) {
            //console.log("Left");
            return "Left";
        }
        if(this.Right > CanvasWidth) {
            //console.log("Right");
            return "Right";
        }
        if(this.Top <= 0){
           // console.log("Top");
            return "Top";
        }
        if(this.Bottom >= CanvasHeight){
            //console.log("Bottom");
            return "Bottom";
        }
        return "None";
    }

    RespondCollisionWitgSidesOfCanvas(side){
        switch (side) {
            case "Left":
                this.Direction = InvertVectorX(this.Direction);
                break;
            case "Right":
                this.Direction = InvertVectorX(this.Direction);
                break;
            case "Top":
                this.Direction = InvertVectorY(this.Direction);
                break;
            case "Bottom":
                console.log("Bottom");
                this.Direction = InvertVectorY(this.Direction);  
                break;
            default:
                break;
        }
    }

}