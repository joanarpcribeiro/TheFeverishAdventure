var background = document.querySelector('body')
var player = new Character(0,0) // (0,0) = Initial position
var oldMan = new OldMan(0,0) // (0,0) = Initial position
var dialogues = document.getElementById("dialogues")
var optionOne = document.getElementById("optionOne")
var wrongWay = document.getElementById("almostDead")
var forward = document.getElementById("forward")
var backwards = document.getElementById("backwards")
var body = document.getElementsByTagName('body')[0]
var treasureChest = document.getElementById("treasure")
var hellBeast = document.getElementById("beast")
var currentScene = 0
var moveLeft = false
var hasSword = false
var goFight = false

//Beast Hidden on main screen
hellBeast.style.visibility= "hidden";

//Treasure hidden on main screen
treasureChest.style.visibility = "hidden";

//Player located on the left on main screen
player.player.style.left = "4vw"

//Wrong way dialogue closed on main screen
wrongWay.style.visibility="hidden";

function closeDialogue() {
    dialogues.style.display = "none";
    player.stopped = false
}

function openDialogue(){
    optionOne.style.display = "block";
    oldMan.turn("left")
}


document.onkeydown = function doKeyDown(e) {
    e.preventDefault() 
    console.log(e.keyCode)
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
        break
      case 39: 
        player.running = false;
        player.charAnime()
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
        hasSword = false
        currentScene=-1
    }
    else if (player.player.style.left.split('vw')[0] >= 8 
    && player.player.style.left.split('vw')[1] >= 8 
    && currentScene === 0 || goFight){
        body.classList.remove("main");
        body.classList.add("image-right");
        oldMan.oldMan.style.display = "none";
        treasureChest.style.visibility = "hidden";
        hellBeast.style.visibility= "visible";
        hasSword = false
        currentScene=1
        player.updateBonce()
        player.player.src="./images/characters/adventurer-idle-00.png";
        wrongWay.style.visibility="visible";
    }

    if(currentScene === -1 &&  player.x <= 8){
        player.player.src="./images/characters/adventurer-idle-2-00.png";
        hasSword = true
        currentScene=-1
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

    if (currentScene ===0 && player.x <=85 && hasSword){
        player.player.src="./images/characters/adventurer-idle-2-00.png";
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
    
    if(currentScene === 1 && player.x >= 30 && hasSword){
        hellBeast.src="./images/villain/Hell-Beast-Files/GIF/with-stroke/hell-beast-burn.gif"
    }

    if(currentScene === 1 && player.x >= 25 && !hasSword){ //NOT WORKING!!
        player.charDie()
    }

}, 100);


forward.onclick = function(){
    player.stopped = false
    optionOne.style.display = "none";
    goFight=true
    player.x=0
}

backwards.onclick= function(){
    player.stopped = false
    optionOne.style.display = "none";
}
