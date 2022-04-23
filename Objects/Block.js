class Block extends RectangleObject{
    constructor(position, width, height, colour = undefined){
        super(position, width, height, true, colour);
    }

    Update(){
        
    }

    Draw(){
        if(this.Visible){
            DrawRectangleFromGameObject(this, Colours.Red)
        }
    }



}