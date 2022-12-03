export default function createGame() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  let isOver = false
  let mouse = {x: 135, y: 185}
  let rattraps = []
  let intervalID

  const mouseImg = new Image()
  const rattrapImg = new Image()


  // mouseImg.src = 'http://peps-deratisation.com/images/icon_27457-300x300.png';
  // rattrapImg.src = 'http://i0.hdslb.com/bfs/archive/b1a3cf16937a21eefb6189f5df474201f86ff678.jpg';
  mouseImg.src = 'https://img2.baidu.com/it/u=1362865500,2543773888&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=530'
  rattrapImg.src = 'https://img2.baidu.com/it/u=3915870920,4177932845&fm=253&fmt=auto&app=138&f=JPEG?w=204&h=168'


  // const up = 38, down = 40, left = 37, right = 39
  const pressedKeys = {}

  intervalID = setInterval(changeY, 10)

  function changeY() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    moveMouse()
    creatMouse(mouse.x, mouse.y)
    randomChips()
    isTouch()
    if (isOver) Over()

  }

  function creatMouse(x, y) {
    ctx.drawImage(mouseImg, x, y, 40, 40)
  }

  function creatRattrap(x, y) {
    ctx.drawImage(rattrapImg, x, y, 40, 40)
  }

  function randomChips() {
    let newChips = rattraps.filter(rattrap => rattrap.y < canvas.height)
    rattraps = newChips
    let x1 = parseInt(Math.random() * canvas.width)
    ctx.fillStyle = 'pink'
    if (x1 % 20 === 0) {
      rattraps.push({x: x1, y: -5})
    }

    for (let i = 0; i < rattraps.length; i++) {
      rattraps[i].y += 1
      creatRattrap(rattraps[i].x, rattraps[i].y)
    }

  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowUp'
      || event.key === 'ArrowDown'
      || event.key === 'ArrowLeft'
      || event.key === 'ArrowRight') {
      pressedKeys[event.key] = true
    }
  }


  function handleKeyUp(event) {
    if (event.key === 'ArrowUp'
      || event.key === 'ArrowDown'
      || event.key === 'ArrowLeft'
      || event.key === 'ArrowRight') {
      pressedKeys[event.key] = false
    }
  }

  document.addEventListener('keydown',handleKeyDown)
  document.addEventListener('keyup',handleKeyUp)


  function moveMouse() {

    if (pressedKeys['ArrowLeft']) { //左
      if (mouse.x === 0) {
        mouse.x = canvas.width - 30
      }
      else {
        mouse.x -= 5
      }
    }
    else if (pressedKeys['ArrowUp'] && mouse.y > 0) { // 上
      mouse.y -= 5
    }
    else if (pressedKeys['ArrowRight']) { //右
      if (mouse.x === canvas.width - 30) {
        mouse.x = 0
      }else {
        mouse.x += 5
      }
    }
    else if (pressedKeys['ArrowDown'] && mouse.y < canvas.height - 40) { //下
      mouse.y += 5
    }

  }

  function isTouch() {
    for (let i = 0; i < rattraps.length; i++) {
      if (Math.abs(rattraps[i].x - mouse.x) <= 30 && Math.abs(rattraps[i].y - mouse.y) <= 30) {
        isOver = true
      }
    }
    return isOver
  }


  function Over() {
    clearInterval(intervalID)
    showMessage()
  }

  function showMessage() {
    ctx.fillStyle = '#FF7043'
    ctx.font = '50px Arial'
    ctx.fillText('Game Over!', canvas.width / 4, canvas.height / 2)
  } 
}