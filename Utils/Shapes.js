class Rectangle{
    constructor(x, y, z, width, height){
        this.Position = createVector(x, y, z);
        this.Width = width;
        this.Height = height;
    }

    Move(x, y){
        this.Position.x = x;
        this.Position.y = y;
    }

    Resize(width, height){
        ChangeWidth(width);      
        ChangeHeight(height);
    }

    ChangeWidth(width){
        this.Width = width;
    }    
    ChangeHeight(Height){
        this.Height = height;
    }

    Draw(){
        rect(this.Position.x - (this.Width / 2) ,this.Position.y - (this.Width / 2), this.Width, this.Height);
    }
}

