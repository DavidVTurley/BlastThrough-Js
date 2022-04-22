function DrawRectangle(position, width, height, colour = (200, 200, 200), hasBorder = true){
    let c = color(colour);
    fill(c);
    if(!hasBorder) noStroke();
    rect(position.x, position.y, width, height)
}

function DrawRectangleFromGameObject(gameObject, colour = color(200, 200, 200), hasBorder = true){
    DrawRectangle(createVector(gameObject.Left, gameObject.Top, 0), gameObject.Width, gameObject.Height, colour, hasBorder);
}

class Colours{
    constructor(){        
        Object.prototype.Red = colour(255,0,0);
        Object.prototype.Blue = color(0, 255, 0);
        Object.prototype.Green = colour(0,0, 255);
        Object.prototype.White = colour(255, 255, 255);
        Object.prototype.Black = colour(0, 0, 0);
    }
}