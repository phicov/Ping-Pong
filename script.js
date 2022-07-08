let ball = document.getElementById('ball')
let playerPaddle = document.getElementById('player-paddle')
let compPaddle = document.getElementById('comp-paddle')


playerPaddle.style.marginLeft = '22.5px'
playerPaddle.style.marginTop = '0px'
compPaddle.style.marginLeft = '786px'
compPaddle.style.marginTop = '0px'
ball.style.marginLeft = '400.5px'
ball.style.marginTop = '196.5px'


let W_Pressed = false
let S_Pressed = false
let  ID

let Vx = -1
let Vy = -1
let V = Math.sqrt(Math.sqrt(Math.pow(Vx,2)+Math.pow(Vy,2)))



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

function reset(){
  clearInterval(ID)
  Vx = 1
  Vy = -1
  V = Math.sqrt(Math.sqrt(Math.pow(Vx,2)+Math.pow(Vy,2)))
  ball.style.marginLeft = '400.5px'
  ball.style.marginTop = '196.5px'
  gameLoop()
}

function gameLoop(){
  setTimeout(() =>{
    ID = setInterval(() =>{
      if(marginLeft(ball)<0){
        document.querySelector('#comp-score').innerHTML = Number(document.querySelector('#comp-score').innerHTML)+1
        reset()
        return

      }
      if((marginLeft(ball)+5) > 816){
        document.querySelector('#player-score').innerHTML = Number(document.querySelector('#player-score').innerHTML)+1
        reset()
        return
        
      }
      if(marginTop(ball)<0 || (marginTop(ball)+10)> 410){
        Vy = -Vy
      }

      let paddle = (marginLeft(ball)+10<300) ? playerPaddle : compPaddle

      if(collisionDetected(paddle)){
        let angle
        let type = (marginLeft(paddle) == 20) ? 'player' : 'comp'
        if(ball.centerY==paddle.centerY){
          angle = (type=='comp' ? 0 : Math.PI)
        }
      Vx = -Vx
      }

      let compLevel = 0.03
compPaddle.style.marginTop = `${marginTop(compPaddle)+((ball.centerY - (marginTop(compPaddle)+ 18))) * compLevel}px`


        ball.style.marginLeft = `${marginLeft(ball)+Vx}px`
        ball.style.marginTop = `${marginTop(ball)+Vy}px`


      if(W_Pressed && marginTop(playerPaddle)>0){
        playerPaddle.style.marginTop = `${marginTop(playerPaddle)-0.8}px`
      }
      else if(S_Pressed && marginTop(playerPaddle)<355){
        playerPaddle.style.marginTop = `${marginTop(playerPaddle)+0.8}px`
      }
    },5)
  },500)
}
//If 'W' is pressed wih each passing interval, decrement the value of marginTop of the player paddle by 2.
//If 'S' is pressed wih each passing interval, increment the value of marginTop of the player paddle by 2.
//Statements after && prevent paddle from going off page
function collisionDetected(paddle){
  ball.top = marginTop(ball)
  ball.bottom = marginTop(ball) + 20
  ball.left = marginLeft(ball)
  ball.right = marginLeft(ball) + 20
  ball.centerX = marginLeft(ball) + 10
  ball.centerY = marginTop(ball) + 10

  paddle.top = marginTop(paddle)
  paddle.bottom = marginTop(paddle) + 50
  paddle.left = marginLeft(paddle)
  paddle.right = marginLeft(paddle) + 10
  paddle.centerX = marginLeft(paddle)  + 5
  paddle.centerY = marginTop(paddle)  + 36

  return ball.left < paddle.right && ball.top < paddle.bottom && ball.right > paddle.left && ball.bottom > paddle.top
}



function marginTop(elem){
  return Number(elem.style.marginTop.split('p')[0])
}

function marginLeft(elem){
  return Number(elem.style.marginLeft.split('p')[0])
}

//marginTop & marginLeft functions will return the numerical value of marginTop or marginLeft property of any element passed to them as an argument.




