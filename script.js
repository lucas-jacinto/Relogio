let digitalElement = document.querySelector('.digital')
let segElement = document.querySelector('.p_seg')
let minElement = document.querySelector('.p_min')
let horasElement = document.querySelector('.p_horas')

function uptadeClock() {
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()

  //relogio digital
  digitalElement.innerHTML = `${fixZeros(hour)}:${fixZeros(minute)}:${fixZeros(
    second
  )}`

  //relogio analogico
  let segDeg = (360 / 60) * second - 90
  let minDeg = (360 / 60) * minute - 90
  let hourDeg = (360 / 12) * hour - 90

  segElement.style.transform = `rotate(${segDeg}deg)`
  minElement.style.transform = `rotate(${minDeg}deg)`
  horasElement.style.transform = `rotate(${hourDeg}deg)`
}

//funcao para corrigir a quebra do 0
function fixZeros(time) {
  return time < 10 ? `0${time}` : time
}

//aumenta o relogio a cada 1seg
setInterval(uptadeClock, 1000)
uptadeClock()
