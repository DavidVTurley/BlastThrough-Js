class Block extends RectangleObject{
    constructor(position, width, height, colour = undefined){
        super(position, width, height, true, createVector(0, 0, 0), 0, true, colour = colour);
    }
}