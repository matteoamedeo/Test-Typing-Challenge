import countdown from './timer.js'
import {randomArr, getRandomNum} from './random.js'


let contenitoreParole = document.getElementById('contenitore-parole')
let index = -1
let nuovoTest = document.getElementById('nuovo-test')
let spanElements;
let arrayParole = []

//OTTENGO LE PAROLE DAL FILE JSON ESTERNO
async function getDizionario(pagina, data) {
    const dizionarioData = await (await fetch(data)).json()
    const PAROLE = dizionarioData.dizionario
    getRandomNum(PAROLE.length)
    for (let i = 0; i < PAROLE.length; i++) {
        //CREO GLI SPAN IN MODO DINAMICO, IN CUI INSERIRO' LE PAROLE
        spanElements = document.createElement('span')
        spanElements.setAttribute('class', 'parole')
        spanElements.textContent = PAROLE[randomArr[i]]
        arrayParole.push(spanElements)
        pagina.appendChild(spanElements)
    }
    //SELEZIONO LA PRIMA PAROLA
    index === -1 ? arrayParole[0].classList.add('selected') : arrayParole[0].classList.remove('selected')
    return PAROLE
}
//NUOVO TEST
nuovoTest.addEventListener('click', giocaDiNuovo)

function giocaDiNuovo() {
    window.location.reload()
}

function initTest() {
    getDizionario(contenitoreParole, 'dizionario.json')
}
export default initTest;