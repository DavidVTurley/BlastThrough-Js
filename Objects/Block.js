class Block extends GameObject{
    constructor(position, width, height){
        super(position, width, height, true, "square");
        this.Visible = true;
    }

    Update(){
        
    }

    Draw(){
        if(this.Visible){
            this.DrawSelfSquare();
        }
    }



}