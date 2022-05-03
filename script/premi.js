let contenitoreParole = document.getElementById('contenitore-parole')
let index = -1
let parole = contenitoreParole.getElementsByClassName('parole')
let input = document.getElementById('inp')
let paroleCorrette = []
let paroleErrate = []

input.addEventListener('keypress', premi)

function premi(e) {
    input.name = 'start'
    if (e.code === 'Space') {
        index++
        let PAROLA = {
            corrente: parole[index],
            successiva: parole[index + 1]
        }
        let {
            corrente,
            successiva
        } = PAROLA

        corrente.classList.remove('selected')
        successiva.classList.add('selected')

        //SE LA PAROLA E' ESATTA ASSEGNO COLORE VERDE ALTRIMENTI ROSSO
        if (input.value === corrente.innerText) {
            corrente.classList.add('parola-corretta')
            paroleCorrette.push(corrente)
            svuotaInput()
        } else {
            corrente.classList.add('parola-errata')
            paroleErrate.push(corrente)
            svuotaInput()
        }
    }
}

function svuotaInput(){
    setTimeout(function () { input.value = "" }, 1);
}

export { paroleCorrette, paroleErrate }
export default premi