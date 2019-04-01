var background = document.querySelector('body')


var player = new Character(0,0) // (0,0) = Initial position


document.onkeydown = function doKeyDown(e) {
    e.preventDefault() 
    switch(e.keyCode) {
      case 37: 
        player.moveLeft()
        player.charAnime()
        //if (e.keyCode == currentKey){
        //    currentKey = false;
        //    clearInterval(Character.);
        //}
        break
      case 38: 
        player.moveUp()  
        break
      case 39: 
        player.moveRight()
        player.charAnime()
        break
      case 40:
        player.moveDown()
        break
    }
  }

  document.onkeyup = function doKeyDown(e) {
    e.preventDefault() 
    switch(e.keyCode) {
      case 37: 
        player.clearInterval()
        break
      case 38: 
        player.moveUp()  
        break
      case 39: 
      player.clearInterval()
        break
      case 40:
        player.moveDown()
        break
    }
  }
 