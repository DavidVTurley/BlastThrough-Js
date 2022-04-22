function DrawRectangle(position, width, height, colour = color(200, 200, 200), hasBorder = true){
    let c = color(colour);
    fill(c);
    if(!hasBorder) noStroke();
    rect(position.x, position.y, width, height)
}

function DrawRectangleFromGameObject(gameObject, colour = color(200, 200, 200), hasBorder = true){
    DrawRectangle(createVector(gameObject.Left, gameObject.Top, 0), gameObject.Width, gameObject.Height, colour, hasBorder);
}