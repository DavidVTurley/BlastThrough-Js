class PowerUp extends RectangleObject{
    constructor(position, width, height, hasHitBox = true, direction = createVector(0,1,0), initialSpeed = 1, powerUpType = "SizeUp", visible = true){
    
        super(position, width, height, hasHitBox, direction, initialSpeed, visible);
        this.PowerUpType = powerUpType;
        this.CleanUp = false;
    }

    Update(player) {
        if(!this.HitBox) return false;
        if(this.DetectColisionWithSidesOfCanvas()){
            this.CleanUp = true;
            this.Visible = false;
            this.HitBox = false;
            return false;
        }
        if(!this.CheckCollision(player)) return false;

        this.HitBox = false;
        this.Visible = false;
        switch (this.PowerUpType) {
            case "SizeUp": 
                if(player.Width < 220){
                    player.Width += 40
                }
                break;
            case "SizeDown": 
                if(player.Width > 40){
                    player.Width -= 40
                }
                break;
            case "SizeUp": 
                    
                break;
            case "SizeUp": 
                    
                break;
            case "SizeUp": 
                    
                break;
        }
    }
}