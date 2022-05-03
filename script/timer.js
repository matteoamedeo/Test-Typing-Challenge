import * as risultatoParole from './premi.js'
import paragrafi from './risultato.js'

let countdown = setInterval(timer, 1000);
let secondi = 59
let input = document.getElementById('inp')

function timer() {
    let startTimer = document.getElementById('inp').name
    if(startTimer === 'start'){
        let timerSpan = document.getElementById('timer')
        timerSpan.innerText = `${secondi--}`
        if (secondi < 0) {
            stopTimer()
        }
    }
}

function stopTimer() {
    clearInterval(countdown);
    input.disabled = true
    paragrafi[0].textContent = `Parole corrette = ${risultatoParole.paroleCorrette.length}`
    paragrafi[1].textContent = `Parole errate = ${risultatoParole.paroleErrate.length}`
}

export default countdown