class Block extends RectangleObject{
    constructor(position, width, height){
        super(position, width, height, true);
    }

    Update(){
        
    }

    Draw(){
        if(this.Visible){
            DrawRectangleFromGameObject(this, color(220, 0, 0))
        }
    }



}