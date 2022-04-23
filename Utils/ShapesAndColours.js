class Colours{
    static Red = [255, 0,0]; 
    static Green = [0, 255, 0]; 
    static Blue = [0, 0, 255]; 
    static White = [255, 255, 255]; 
    static Black = [0, 0,0]; 
}

function DrawRectangle(position, width, height, colour = [255, 255, 255], hasBorder = true){
    fill(color(colour[0], colour[1], colour[2]));
    if(!hasBorder) noStroke();
    rect(position.x, position.y, width, height)
}

function DrawRectangleFromGameObject(gameObject, hasBorder = true){
    DrawRectangle(createVector(gameObject.Left, gameObject.Top, 0), gameObject.Width, gameObject.Height, gameObject.Colour, hasBorder);
}