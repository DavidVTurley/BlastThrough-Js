function GetVectorToObject(from, to){
    return createVector(to.x - from.x, to.y - from.y, to.z - from.z);
}

function GetAngleToObject(from, to){
    Math.atan2(y, x)
}

function InvertVectorX(vector){
    vector.x *= -1;
    return vector;
}

function InvertVectorY(vector){
    vector.y *= -1;
    return vector;
}