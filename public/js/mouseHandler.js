export function handleMouseMove(e) {
  let body = document.querySelector('body')
  let bubbles = document.createElement('div')
  let x = e.clientX
  let y = e.clientY
  bubbles.className = 'kitty';

  bubbles.style.left = x + 'px'
  bubbles.style.top = y + 'px'

  let size = Math.random() * 30
  bubbles.style.width = size + 'px'
  bubbles.style.height = size + 'px'

  body.appendChild(bubbles)

  setTimeout(() => {
   bubbles.remove()
  },2000)

}

export function handleClick(e) { 

}

export function handleMouseDown(e) {
  let body = document.querySelector('body')

  // 点击爱心特效
  // 文字数组
  const text = ['hi~', '点点点~', '啦啦啦~', '干嘛呀~', '哦吼~', '咦~'];

  // 获取鼠标点击位置
  let x = e.clientX - 18
  let y = e.clientY - 30

  // 分别创建所需要的元素节点
  let heart_box = document.createElement('div')
  let heart_left = document.createElement('div')
  let heart_right = document.createElement('div')
  let heart_under = document.createElement('div')
  let heart_txt = document.createElement('div')

  // 通过随机数从文字数组中获取随机下标的文字
  let textNode = document.createTextNode(text[parseInt(Math.random() * text.length)]);

  // 文字添加到txt节点中
  heart_txt.appendChild(textNode);

  heart_box.className = 'heart_box';
  heart_left.className = 'heart_left';
  heart_right.className = 'heart_right';
  heart_under.className = 'heart_under';
  heart_txt.className = 'heart_text';

  heart_box.style.top = y + 'px';
  heart_box.style.left = x + 'px';

  // 将创建的元素添加到容器中
  heart_box.appendChild(heart_left);
  heart_box.appendChild(heart_right);
  heart_box.appendChild(heart_under);
  heart_box.appendChild(heart_txt);
  document.body.appendChild(heart_box);
  
  // 获取随机颜色
  let color = 'rgb(' + 
    parseInt(Math.random() * 255) + ',' + 
    parseInt(Math.random() * 255) + ',' + 
    parseInt(Math.random() * 255) + ')'
  heart_txt.style.color = color

  for (let i = 0; i < 3; i++) {
      heart_box.children[i].style.background = color
  }

}


export function handleMouseUp(e) {
  // 爱心消失删除
  const boxs = document.getElementsByClassName('heart_box')

  for (let i = 0; i < boxs.length; i++) {
    boxs[i].style.transform = 'scale(0.5)'
    boxs[i].style.transform = 'translateY(-40px)'
    boxs[i].style.opacity = '0'

    setTimeout(() => {
     if (boxs[i]) {
       boxs[i].remove()
     }
    },2000)
  }

}



