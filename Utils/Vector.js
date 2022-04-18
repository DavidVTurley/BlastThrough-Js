function GetVectorToObject(from, to){
    return createVector(to.x - from.x, to.y - from.y, to.z - from.z);
}

/**
* @description Left = 180, Top = 90, left = 0, bottom = -90  
*/
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

function GetSideOfObjectFromAngle(angle){
    switch (angle) {
        case angle > 45 && angle < 135:
            return "Top";
        case angle > -45 && angle < 45:
            return "Right";
        case angle > -135 && angle < -45:
            return "Bottom";
        case angle <= -180 && angle > -135
        || angle > 135 && angle < 180:
            return "Left";
    
        default:
            return undefined;
    }
}

function InvertVectorX(vector){
    vector.x *= -1;
    return vector;
}

function InvertVectorY(vector){
    vector.y *= -1;
    return vector;
}