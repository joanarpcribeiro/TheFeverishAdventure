class Character {
    constructor(x, y) {
        this.x=0;
        this.y=0;
        this.direction = undefined
        this.player = document.getElementsByClassName("main-character")[0]
        this.running = false
        this.interval = undefined
    }

    moveUp(){
       this.y-=1
       this.updateBonce()
    }
    moveRight(){
        console.log('lol')
        this.x+=1
        this.updateBonce()
    }
    moveDown(){
        this.y+=1
        this.updateBonce()
    }
    moveLeft(){
        this.x-=1
        this.updateBonce()
    }

    updateBonce(){
        this.player.style.left = this.x + 'vw'
        this.player.style.up = this.y + 'vh'
    }

    charAnime(){
        console.log('running', this.running)
        let animPosition = 0
        //var myVar = setInterval()
        if(!this.interval){
            this.interval = setInterval(() => {
                switch(animPosition){
                    case 0:
                        this.player.src = "./characters/adventurer-run-00.png"
                        animPosition=1
                        break;
                    case 1:
                        this.player.src = "./characters/adventurer-run-01.png"
                        animPosition=2
                        break;
                    case 2:
                        this.player.src = "./characters/adventurer-run-02.png"
                        animPosition=3
                        break;
                    case 3:
                        this.player.src = "./characters/adventurer-run-03.png"
                        animPosition=4
                        break;
                    case 4:
                        this.player.src = "./characters/adventurer-run-04.png"
                        animPosition=5
                        break;
                    case 5:
                        this.player.src = "./characters/adventurer-run-05.png"
                        animPosition=0
                        break;
                }
            }, 300);
        } else if(!this.running){
            clearInterval(this.interval);
            this.interval = undefined
        }
    }
    
    charJump(){
        this.player.style.bottom = "2vh";
        setTimeout(() => {
            this.player.style.bottom = "0vh";
        }, 500);
    }
}