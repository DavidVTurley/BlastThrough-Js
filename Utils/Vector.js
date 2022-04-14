function GetNormalizedVectorFromObjects(x1, y1, x2, y2){
    let vector = GetVectorToObjectTwo(x1, y1, x2, y2);
    //console.log(vector);

    let largestNum = Math.abs(vector.x);

    if(Math.abs(vector.y) >= largestNum){
        largestNum = vector.y;
    }
    else if(Math.abs(vector.z) >= largestNum){
        largestNum = vector.z;
    }

    return createVector(vector.x / largestNum, vector.y / largestNum, vector.z / largestNum);
}

function GetVectorToObjectTwo(object1Vector, object2vector){    
    return createVector(
        object1Vector.x - object2vector.x, 
        object1Vector.y - object2vector.y,
        object1Vector.z - object2vector.z,);
}

function InvertVectorX(vector){
    vector.x *= -1;
    return vector;
}
function InvertVectorY(vector){
    vector.y *= -1;
    return vector;
}
function InvertVectorZ(vector){
    vector.z *= -1;
    return vector;
}
function InvertVector(vector){
    return createVector(InvertVectorX(vector), InvertVectorY(vector), InvertVectorZ(vector));
}