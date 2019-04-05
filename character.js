class Character {
    constructor(x, y) {
        this.x=0;
        this.y=0;
        this.direction = undefined
        this.player = document.getElementsByClassName("main-character")[0]
        this.running = false
        this.interval = undefined
        this.stopped = true
        this.firstDialog = false
        this.fightPosition=0
        this.diePosition=0
        this.lastDialog = false
    }

    moveRight(){
        if(!this.stopped){
        this.x+=1
        this.updateBonce()
        }
    }
    moveLeft(){
        if(!this.stopped){
        this.x-=1
        this.updateBonce()
    }
    }

    updateBonce(){
        this.player.style.left = this.x + 'vw'
        this.player.style.bottom = this.y + 'vh'
        
    }

    charAnime(){
        if (this.stopped) {
            this.player.src = "./images/characters/adventurer-idle-00.png"
            if(this.interval) {
                clearInterval(this.interval);
                this.interval = undefined
            }
            return
        }
        let animPosition = 0
        if(!this.interval){
            this.interval = setInterval(() => {
                switch(animPosition){
                    case 0:
                        this.player.src = "./images/characters/adventurer-run-00.png"
                        animPosition=1
                        break;
                    case 1:
                        this.player.src = "./images/characters/adventurer-run-01.png"
                        animPosition=2
                        break;
                    case 2:
                        this.player.src = "./images/characters/adventurer-run-02.png"
                        animPosition=3
                        break;
                    case 3:
                        this.player.src = "./images/characters/adventurer-run-03.png"
                        animPosition=4
                        break;
                    case 4:
                        this.player.src = "./images/characters/adventurer-run-04.png"
                        animPosition=5
                        break;
                    case 5:
                        this.player.src = "./images/characters/adventurer-run-05.png"
                        animPosition=0
                        break;
                }
            }, 300);
        } else if(!this.running){
            this.player.src = "./images/characters/adventurer-idle-00.png"
            clearInterval(this.interval);
            this.interval = undefined
        }
    }
    
    charJump(){
        this.player.style.bottom = "8vh";
        setTimeout(() => {
            this.player.style.bottom = "0vh";
        }, 500);
    }
    
    turn(direction){
        if (direction === "left")
            this.player.classList.add("turnLeft")
        else 
            this.player.classList.remove("turnLeft")
    }
    createQuestion(){
        if(this.player.style.left[0] >= 8 && this.player.style.left[1] >= 0 && !this.firstDialog){
            openDialogue()
            this.stopped = true
            this.firstDialog = true
            moveLeft = true

        }
    }
    trackCharacterPosition(){
        console.log(this.player.style.left)
        console.log("Condition", player.player.style.left.split('vw')[0])
    }

    charFight(){
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-attack1-00.png"
            this.fightPosition=1
        }, 100);
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-attack1-01.png"
            this.fightPosition=2
        }, 200);      
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-attack1-02.png"
            this.fightPosition=3
        }, 300);
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-attack1-03.png"
            this.fightPosition=4
        }, 400);
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-attack1-04.png"
            this.fightPosition=5
        }, 500);
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-attack2-03.png"
            this.fightPosition=6
        }, 600);
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-attack1-00.png"
            this.fightPosition=0
        }, 700);                
     }

     charDie(){
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-die-05.png"
            this.diePosition=1
        }, 100);
        setTimeout(() => {
            this.player.src = "./images/characters/adventurer-die-06.png"
            this.diePosition=2
        }, 200);                
     }

}