let time = 0
let contentTimer = document.querySelector('#timerContainer')
let resetBtn = document.querySelector('#resetTimer')

window.addEventListener('load', function(){
    time = localStorage.getItem('lastSecond')
})

let secondTimer = setInterval(function(){
    time++
    contentTimer.innerHTML = time
    localStorage.setItem('lastSecond',time)
},1000)

resetBtn.addEventListener('click',function(){
    localStorage.clear()
    time = 0
})
