let timer = document.getElementById("timer")
let start = document.getElementById("start")
let pause = document.getElementById("pause")
let period = document.getElementById("period")
let resume = document.getElementById("resume")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

const startingMinutes = 30
let time = 30 * 60
let counter = 0
let timeout
let timer_on = 0

function runTimer() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    if (seconds < 10) {
        seconds = seconds + '0'
    }
    
    timer.textContent = minutes + ':' + seconds
    time-- 
    timeout = setTimeout(runTimer, 1000)   
}

function startTimer() {
    if (!timer_on) {
    period.textContent = 1
    timer_on = 1
    runTimer()
  }
}

function pauseTimer() {
    clearTimeout(timeout)
    timer_on = 0
}

function resetTimer() {
    time = 30 * 60 
    period.textContent = 0
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    if (seconds < 10) {
        seconds = seconds + '0'
    }
    homeScore.textContent = 0
    guestScore.textContent = 0
    timer.textContent = minutes + ':' + seconds
    clearTimeout(timeout)
    timer_on = 0
}

function increaseOne() {
    homeScore.textContent ++
}

function increaseTwo() {
    homeScore.textContent = parseInt(homeScore.textContent) + 2
}

function increaseThree() {
    homeScore.textContent = parseInt(homeScore.textContent) + 3
}

function increaseOneG() {
    guestScore.textContent ++
}

function increaseTwoG() {
    guestScore.textContent = parseInt(guestScore.textContent) + 2
}

function increaseThreeG() {
    guestScore.textContent = parseInt(guestScore.textContent) + 3
}