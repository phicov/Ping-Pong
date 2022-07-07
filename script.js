const ball = document.getElementById('ball')
let playerPaddle = document.getElementById('player-paddle')
let compPaddle = document.getElementById('computer-paddle')
const playerScore = document.getElementById('player-score')
const compScore = document.getElementById('computer-score')


playerPaddle.style.marginLeft = '30px'
playerPaddle.style.maginTop = '0px'
compPaddle.style.marginLeft = '1048px'
compPaddle.style.marginTop = '0px'
ball.style.marginLeft = '534px'
ball.style.marginTop = '262px'


//////////////////////////////////////////////////////////////////
///////////PADDLE SCRIPT///////////

let W_Pressed = false
let S_Pressed = false

document.addEventListener('keydown',(e)=> {
  if(e.keyCode=='87'){
    W_Pressed = true
  } 
  else if(e.keyCode=='83'){
    S_Pressed = true
  }
})

document.addEventListener('keyup',(e)=> {
  if(e.keyCode=='87'){
    W_Pressed = false
  } 
  else if(e.keyCode=='83'){
    S_Pressed = false
  }
})


gameLoop()

function gameLoop(){
  setTimeout(() =>{
    setInterval(() =>{
      if(W_Pressed && marginTop(playerPaddle)>-181){
        playerPaddle.style.marginTop = `${marginTop(playerPaddle)-1}px`
      }
      else if(S_Pressed && marginTop(playerPaddle)<181){
        playerPaddle.style.marginTop = `${marginTop(playerPaddle)+1}px`
      }
    },5)
  },500)
}
//If 'W' is pressed wih each passing interval, decrement the value of marginTop of the player paddle by 2.
//If 'S' is pressed wih each passing interval, increment the value of marginTop of the player paddle by 2.
//Statements after && prevent paddle from going off page

function marginTop(elem){
  return Number(elem.style.marginTop.split('p')[0])
}

function marginLeft(elem){
  return Number(elem.style.marginLeft.split('p')[0])
}

//marginTop & marginLeft functions will return the numerical value of marginTop or marginLeft property of any element passed to them as an argument.


//////////////////////////////////////////////////////////////////
/////////////BALL SCRIPT///////////
