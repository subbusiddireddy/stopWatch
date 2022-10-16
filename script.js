const stopwatch = document.getElementById("display")

const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

let startTime;

let elapsedTime = 0;

let stopwatchInterval;

const timeToString = (time) => {
    // we get time in mili seconds

    // 1 hr = 1*60*60*1000 ms

    let exactHours = time/(60*60*1000) // convering into hrs
    let hh = Math.floor(exactHours)

    let exactMinsRemaining = (exactHours-hh)*60
    let min = Math.floor(exactMinsRemaining)

    let exactSecondsRemaining = (exactMinsRemaining - min)*60
    let sec = Math.floor(exactSecondsRemaining)

    let exactMsRemaining = (exactSecondsRemaining - sec)*1000
    let ms = Math.floor(exactMsRemaining)

    let fHh = hh.toString().padStart(2,"0") // to fill the time having 2 digits
    let fMin = min.toString().padStart(2,"0")
    let fSec = sec.toString().padStart(2,"0")
    let fMs = ms.toString().padStart(3,"0")

    stopwatch.innerHTML = (`${fHh}:${fMin}:${fSec}:${fMs}`)


}

const showButton = (buttonKey) => {

    if(buttonKey==="PLAY"){
        playButton.style.display="block"
        pauseButton.style.display="none"
    }else{
        pauseButton.style.display="block"
        playButton.style.display="none"
    }
}
const startStopwatch = () => {

    startTime = Date.now() - elapsedTime // to store the waited time

    stopwatchInterval = setInterval(()=>{
        // print the time
        elapsedTime = Date.now() - startTime // subtracting those waited time
        timeToString(elapsedTime)
    },1)
    showButton("PAUSE")

}

const stopStopwatch = () => {
    // pause the stopwatch
    clearInterval(stopwatchInterval) // time stops but doesn't reset to 0
    showButton("PLAY")
}

const resetStopwatch = () => {
    clearInterval(stopwatchInterval) // time stops
    stopwatch.innerHTML = "00:00:00:000" // resets to 0
    elapsedTime = 0
    showButton("PLAY")
}


playButton.addEventListener("click",startStopwatch)
pauseButton.addEventListener("click",stopStopwatch)
resetButton.addEventListener("click",resetStopwatch)