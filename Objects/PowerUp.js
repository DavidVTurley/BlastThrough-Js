class PowerUp extends RectangleObject{
    constructor(position, width, height, hasHitBox = true, direction = createVector(0,1,0), initialSpeed = 1, powerUpType = "SizeUp", visible = true){
    
        super(position, width, height, hasHitBox, direction, initialSpeed, visible);
        this.PowerUpType = powerUpType;
        this.CleanUp = false;
    }

    static CreatePowerUp(position){
        let r = random(0, 6);
        if(r < 4){
            console.log("PowerupCreated")
            return new PowerUp(CopyVector(position), 40, 20, true, createVector(0, 1, 0), 2, "SizeUp", true);
        }
        if(r < 6){
            console.log("PowerupCreated")
            return new PowerUp(CopyVector(position), 40, 20, true, createVector(0, 1, 0), 2, "SizeDown", true);
        }
        if(r < 4){
            console.log("PowerupCreated")
            return new PowerUp(CopyVector(position), 40, 20, true, createVector(0, 1, 0), 2, "SizeUp", true);
        }
        if(r < 4){
            console.log("PowerupCreated")
            return new PowerUp(CopyVector(position), 40, 20, true, createVector(0, 1, 0), 2, "SizeUp", true);
        }
        if(r < 4){
            console.log("PowerupCreated")
            return new PowerUp(CopyVector(position), 40, 20, true, createVector(0, 1, 0), 2, "SizeUp", true);
        }
    }

    Draw(){
        switch (this.PowerUpType) {
            case "SizeUp": 
                DrawRectangleFromGameObject(this, Colours.Green, true)
                break;

            case "SizeDown": 
                DrawRectangleFromGameObject(this, Colours.Red, true);
                break;

            case "SizeUp": 
                DrawRectangleFromGameObject(this, color(0, 255, 70), true);
                break;

            case "SizeUp": 
                DrawRectangleFromGameObject(this, color(0, 255, 70), true);
                break;

            case "SizeUp": 
                DrawRectangleFromGameObject(this, color(0, 255, 70), true);
                break;
            default:
                DrawRectangle(this, color(255, 255, 255))
                break;
        }

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