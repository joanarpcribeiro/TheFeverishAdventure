class OldMan {
    constructor(x, y) {
        this.x=0;
        this.y=0;
        this.direction = undefined
        this.oldMan = document.getElementById("old-man")
        this.interval = undefined
    }
    moveRight(){
        if(!this.stopped){
            this.x+=1
            this.updateWalk()
        }
    }
    moveLeft(){
        if(!this.stopped){
            this.x-=1
            this.updateWalk()
        }
    }
    updateWalk(){
        this.oldMan.style.left = this.x + 'vw'
    }
    turn(direction){
        if (direction === "left")
            this.oldMan.classList.add("turnLeft")
        else 
            this.oldMan.classList.remove("turnLeft")
    }

}

