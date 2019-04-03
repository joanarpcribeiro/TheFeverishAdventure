var background = document.querySelector('body')
var player = new Character(0,0) // (0,0) = Initial position
var oldMan = new OldMan(0,0) // (0,0) = Initial position
var dialogues = document.getElementById("dialogues")
var optionOne = document.getElementById("optionOne")
var forward = document.getElementById("forward")
var backwards = document.getElementById("backwards")
var body = document.getElementsByTagName('body')[0]
var treasureChest = document.getElementById("treasure")
var currentScene = 0

//Treasure hidden on main screen
treasureChest.style.visibility = "hidden";

//Player located on the left on main screen
player.player.style.left = "4vw"

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
    switch(e.keyCode) {
      case 37:  // Left
        player.moveLeft()
        player.charAnime()
        player.turn("left")
        player.running = true;
        break
      case 38: 
        player.moveUp()  
        player.charJump()
        break
      case 39:   // Right
        player.moveRight()
        player.charAnime()
        player.turn("right")
        player.running = true;
        break
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
        //player.moveUp()  
        break
      case 39: 
        player.running = false;
        player.charAnime()
        break
    }
  }

setInterval(() => {
    player.createQuestion()
    if(player.player.style.left.split('vw')[0] <= 0) {
        body.classList.remove("main");
        body.classList.add("image-left");
        oldMan.oldMan.style.display = "none";
        player.player.classList.add("main-character-left")
        treasureChest.style.visibility = "visible";
        currentScene=0
        
    }
    else if (player.player.style.left[0] >= 8 && player.player.style.left[1] >= 6){
        body.classList.remove("main");
        body.classList.add("image-right");
        oldMan.oldMan.style.display = "none";
        player.player.classList.add("main-character-right")
        currentScene=0
    }
}, 100);


forward.onclick = function(){
    player.stopped = false
    optionOne.style.display = "none";
}

backwards.onclick= function(){
    player.stopped = false
    optionOne.style.display = "none";
}


// TODO: trigger goToScreen when the user goes on left or right
// delta is +1 or -1
//function goToScreen(delta) {
//    currentScene += delta
//    if (delta === 1) {
//        // TODO: move the player to the left
//    }
//    else if (delta === -1) {
//        // TODO: move the player to the right
//    }
//    // TODO: change the background image
//}


 

// TODO: when the user chooses "back", beast = new Beast()