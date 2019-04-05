var background = document.querySelector('body')
var player = new Character(0,0) // (0,0) = Initial position
var oldMan = new OldMan(0,0) // (0,0) = Initial position
var dialogues = document.getElementById("dialogues")
var optionOne = document.getElementById("optionOne")
var wrongWay = document.getElementById("almostDead")
var forward = document.getElementById("forward")
var backwards = document.getElementById("backwards")
var retry = document.getElementById("tryAgain")
var quit = document.getElementById("close")
var body = document.getElementsByTagName('body')[0]
var treasureChest = document.getElementById("treasure")
var hellBeast = document.getElementById("beast")
var swordChest = document.getElementById("sword")
var lost = document.getElementById("gameOver")
var winner = document.getElementById("win")
var winRetry = document.getElementById("winTryAgain")
var closeRetry = document.getElementById("winClose")
var instructions = document.getElementById("swordInstructions")
var startInstructions = document.getElementById("after-title")
var instructionsSword = false
var blastSound = document.getElementById("bgm")
var warSound = document.getElementById("bgmWar")
var lostTheGame = document.getElementById("endGame")
var wonTheGame = document.getElementById("winGame")
var killTheMonster = document.getElementById("kill-monster")
var commentScreenZero = document.getElementById("letsKillIt")
var jumpUpSound =document.getElementById("jump")
var swordDraw = document.getElementById("swordUse")
var currentScene = 0
var moveLeft = false
var hasSword = false
var goFight = false
var dead = false


//Player located on the left on main screen
player.player.style.left = "4vw"

//Hidden elements on main screen
//Beast
hellBeast.style.visibility= "hidden";

//Treasure
treasureChest.style.visibility = "hidden";

//Wrong way dialogue
wrongWay.style.visibility="hidden";

//SwordChest dialogue
swordChest.style.visibility="hidden";

//game over
lost.style.visibility="hidden";

//Winner dialogue
winner.style.visibility="hidden"

//Instructions for the sword
instructions.style.visibility="hidden"

//Instructions at the beginning
startInstructions.style.visibility="hidden"

//Kill the monster Message
killTheMonster.style.visibility="hidden"

//Way back to kill the monster
commentScreenZero.style.visibility="hidden"

function closeDialogue() {
    dialogues.style.display = "none";
    player.stopped = false
    startInstructions.style.visibility="visible"
    setTimeout(() => {
        startInstructions.style.visibility="hidden"
    }, 4000);
    blastSound.play()
}

function openDialogue(){
    optionOne.style.display = "block";
    oldMan.turn("left")
}


document.onkeydown = function doKeyDown(e) {
    e.preventDefault() 
    switch(e.keyCode) {
      case 37:  // Left
        if (!player.x <= 0 && moveLeft){
            player.moveLeft()
            player.charAnime()
            player.turn("left")
            player.running = true;
        }
        break
      case 38: 
        player.charJump()
        jumpUpSound.play()
        break
      case 39:   // Right
        player.moveRight()
        player.charAnime()
        player.turn("right")
        player.running = true;
        break
      case 32://Fight animation
        if(hasSword){
         player.charFight()
         swordDraw.play()
        } 
    }
  }

  document.onkeyup = function doKeyDown(e) {
    e.preventDefault() 
    switch(e.keyCode) {
      case 37: 
        player.running = false;
        player.charAnime()
        break
      case 38: 
        player.charJump()
        jumpUpSound.load()
        break
      case 39: 
        player.running = false;
        player.charAnime()
        swordDraw.load()
        break
    }
  }

setInterval(() => {
    player.createQuestion()
    if(player.player.style.left.split('vw')[0] <= 0 && currentScene === 0) {
        body.classList.remove("main");
        body.classList.add("image-left");
        oldMan.oldMan.style.display = "none";
        treasureChest.style.visibility = "visible";
        player.x = 88
        hellBeast.style.visibility= "hidden";
        swordChest.style.visibility="visible";
        setTimeout(() => {
            swordChest.style.visibility="hidden"
        }, 3000);
        hasSword = false
        blastSound.pause()
        warSound.play()
        currentScene=-1
    }
    else if (player.player.style.left.split('vw')[0] >= 8 
    && player.player.style.left.split('vw')[1] >= 8 
    && currentScene === 0 || goFight){
        body.classList.remove("main");
        body.classList.add("image-right");
        oldMan.oldMan.style.display = "none";
        hellBeast.style.visibility= "visible";
        hasSword = false
        currentScene=1
        warSound.play()
        player.updateBonce()
        player.player.src="./images/characters/adventurer-idle-00.png";
    }

    if(currentScene === -1 &&  player.x <= 8){
        player.player.src="./images/characters/adventurer-idle-2-00.png";
        hasSword = true
        swordChest.style.visibility="hidden";
        instructions.style.visibility="visible"
        instructionsSword = true
        warSound.play()
        currentScene=-1
        }

    if(currentScene === -1 &&  player.x > 8){
        instructions.style.visibility="hidden"
    }
    

    if (currentScene === -1 && player.x <= 85 && hasSword){
        player.player.src="./images/characters/adventurer-idle-2-00.png";
    }
    
    if(currentScene === -1 && player.x >= 80 && hasSword){
        body.classList.remove("image-left");
        body.classList.add("main");
        currentScene=0
        treasureChest.style.visibility = "hidden";
        player.x = 0
    }

    if (currentScene ===0 && player.x <=85 && !hasSword){
        player.charAnime()
    }

    if (currentScene ===0 && player.x <=85 && hasSword){
        player.player.src="./images/characters/adventurer-idle-2-00.png";
    }

    if (currentScene ===0 && player.x >=0 && player.x < 30 && hasSword){
        commentScreenZero.style.visibility="visible"
    }

    if(currentScene ===0 && player.x >=30 && hasSword){
        commentScreenZero.style.visibility="hidden"
    }

    if(currentScene === 0 && player.x >= 80 && hasSword){
        body.classList.remove("main");
        body.classList.add("image-right");
        player.player.src="./images/characters/adventurer-idle-2-00.png";
        currentScene=1
        treasureChest.style.visibility = "hidden";
        hellBeast.style.visibility= "visible";
        player.x=0
    }

    if(currentScene === 1 && player.x >= 0 && hasSword){
        player.player.src="./images/characters/adventurer-idle-2-00.png";
        
    } 

    if (currentScene === 1 && player.x >= 0 && player.x <= 20 && hasSword){
        killTheMonster.style.visibility="visible"
    }

    if (currentScene === 1 && player.x > 20 && player.x <= 80 && hasSword){
        killTheMonster.style.visibility="hidden"
    }
    
    if(currentScene === 1 && player.x >= 38 && hasSword){
        hellBeast.src="./images/villain/Hell-Beast-Files/GIF/with-stroke/hell-beast-burn.gif"
        winner.style.visibility="visible"
        setTimeout(() => {
            hellBeast.style.visibility="hidden"
        }, 3000);
        warSound.pause()
        wonTheGame.play()
    }

    if (currentScene===1 && player.x >=20 && !hasSword){
        wrongWay.style.visibility="visible";
        
    }

    if(currentScene === 1 && player.x >= 39 && !hasSword){
        player.stopped = true
        dead = true
        wrongWay.style.visibility="hidden";
        player.charDie()
        lost.style.visibility="visible";
        warSound.pause()
        lostTheGame.play()
    }

}, 100);


forward.onclick = function(){
    blastSound.pause()
    player.stopped = false
    optionOne.style.display = "none";
    goFight=true
    player.x=0
}

backwards.onclick= function(){
    player.stopped = false
    optionOne.style.display = "none";
}

retry.onclick= function (){
    document.location.reload()
}

quit.onclick= function (){
    document.location.reload()
}

winRetry.onclick=function(){
    document.location.reload()
}

closeRetry.onclick=function(){
    document.location.reload()
}