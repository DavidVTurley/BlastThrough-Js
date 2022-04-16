function GetVectorToObject(from, to){
    return createVector(to.x - from.x, to.y - from.y, to.z - from.z);
}


function GetAngleToObject(from, to){
    return (Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI) * -1;

    //               Angle returned as:
    //                      90
    //            135                45
    //
    //       180          Origin           0
    //
    //           -135                -45
    //
    //                     -90
}

function InvertVectorX(vector){
    vector.x *= -1;
    return vector;
}

function InvertVectorY(vector){
    vector.y *= -1;
    return vector;
}