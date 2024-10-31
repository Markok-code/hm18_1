const setTime = document.querySelector(".p")
let time = parseInt(prompt())

const timer = setInterval(() => {
    let min = Math.trunc(time / 60) 
    let sec =  time % 60
    if (time >= 0) {
        setTime.innerHTML = `${min}:${sec}`
        time--
    } 
    else {
        setTime.innerHTML = ""
        clearInterval(timer)
    }
}, 1000)
