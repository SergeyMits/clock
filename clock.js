const timezoneName = document.querySelector('.timezone')

const handH = document.querySelector('.clock-h')
const handM = document.querySelector('.clock-m')
const handS = document.querySelector('.clock-s')

const digitH = document.querySelector('.digital-h')
const digitM = document.querySelector('.digital-m')
const digitS = document.querySelector('.digital-s')

const clockDay = document.querySelector('.day')
const clockDate = document.querySelector('.date')
const clockMonth = document.querySelector('.month')
const btn = document.querySelector('.btn')
const allBtn = document.querySelectorAll(".btn")
const timeMSK = document.querySelector('.msk')
const timeUK = document.querySelector('.uk')
const timeNY = document.querySelector('.ny')
const clockDots = document.querySelector('.separator-dots')
const allClockDots = document.querySelectorAll('.separator-dots')
let indexTime = 3

let monthsArr = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
let daysArr = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']



function clock() {
    const dt = new Date()

    let h = convertUtcHours(indexTime) * 30 + .5 * dt.getMinutes() 
    let m = dt.getMinutes() * 6 + .1 * dt.getSeconds()
    let s = dt.getSeconds() * 6

    handH.style.transform = `rotate(${h}deg)`
    handM.style.transform = `rotate(${m}deg)`
    handS.style.transform = `rotate(${s}deg)`
    //document.querySelector(".clock-s").classList.add("clock-s-animation") // тут косяк с отскоком стрелки. Как победить? 
   
    digitH.textContent = convertUtcHours(indexTime)
    digitM.textContent = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()
    digitS.textContent = dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds()

    console.log (s)

    setTimeout(clock, 1000)
    
}


function convertUtcHours (n) {
    const utcDt = new Date ()
    return utcDt.getUTCHours() + n
}

function checkColorText() {
    const dt = new Date()
    let day = dt.getDay()
    if (day == 0) {
        document.querySelector(".day").style.color = "#d83737"
        document.querySelector(".date").style.color = "#d83737"
    }
}

function date() {
    const dt = new Date()
    let date = dt.getDate()
    let day = dt.getDay()
    let month = dt.getMonth()

    clockDate.textContent = `${date}`
    clockDay.textContent = daysArr[`${day}`]
    clockMonth.textContent = monthsArr[`${month}`]

    checkColorText()    
}


function switchTheme() {
     
    if (btn.classList.contains('btn-light')) {
        //default (dark) color
        allBtn.forEach(element => element.classList.remove("btn-light"))
        document.querySelector("body").style.backgroundColor = "#0e1621"
        document.querySelector(".clock").style.border = "4px solid #0e1621"
        document.querySelector(".date-container").style.border = "2px solid #0e1621"
        document.querySelector(".date-container").style.backgroundColor = "#242f3d"
        document.querySelector(".digital-watch").style.border = "2px solid #0e1621"
        document.querySelector(".digital-watch").style.backgroundColor = "#242f3d"
        document.querySelector(".clock-h").style.backgroundColor = "#c7c7c7"
        document.querySelector(".clock-m").style.backgroundColor = "#c7c7c7"
        document.querySelector(".clock").style.boxShadow = "var(--clock-shadow)"
        document.querySelector(".fa-moon").classList.remove("icon-invisible")
        document.querySelector(".fa-sun").classList.add("icon-invisible")

    } else {
        //Light color
        allBtn.forEach(element => element.classList.add("btn-light"))
        document.querySelector("body").style.backgroundColor = "#cfcfcf"
        document.querySelector(".clock").style.border = "4px solid #cfcfcf"
        document.querySelector(".date-container").style.border = "2px solid #cfcfcf"
        document.querySelector(".date-container").style.backgroundColor = "#aeafaf"
        document.querySelector(".digital-watch").style.border = "2px solid #cfcfcf"
        document.querySelector(".digital-watch").style.backgroundColor = "#aeafaf"
        document.querySelector(".clock-h").style.backgroundColor = "#505050"
        document.querySelector(".clock-m").style.backgroundColor = "#505050"
        document.querySelector(".clock").style.boxShadow = "var(--clock-shadow-light)"
        document.querySelector(".fa-moon").classList.add("icon-invisible")
        document.querySelector(".fa-sun").classList.remove("icon-invisible")
    }
    checkColorText()  
}


timeUK.onclick = () => {
    indexTime = 0
    timezoneName.textContent = "LONDON"
}
timeMSK.onclick = () => {
    indexTime = 3
    timezoneName.textContent = "MOSCOW"
}
timeNY.onclick = () => {
    indexTime = -5
    timezoneName.textContent = "NEW YORK"
    
}

btn.onclick = switchTheme
date()
clock()
