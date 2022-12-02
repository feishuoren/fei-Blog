export function handleMouseMove(e) {
  let body = document.querySelector('body')
  let bubbles = document.createElement('span')
  let x = e.clientX
  let y = e.clientY

  bubbles.style.left = x + 'px'
  bubbles.style.top = y + 'px'

  let size = Math.random() * 50
  bubbles.style.width = size + 'px'
  bubbles.style.height = size + 'px'

  body.appendChild(bubbles)

  setTimeout(() => {
   bubbles.remove()
  },2000)

}