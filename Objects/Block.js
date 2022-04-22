class Block extends RectangleObject{
    constructor(position, width, height, Colour = undefined){
        super(position, width, height, true, Colour);
    }

    Update(){
        
    }

    Draw(){
        if(this.Visible){
            DrawRectangleFromGameObject(this, color(220, 0, 0))
        }
    }



}