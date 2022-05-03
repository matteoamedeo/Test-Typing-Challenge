let paragrafi = []
let risultatiWrapper = document.getElementById('result')

//PARAGRAFI PER MOSTRARE IL RISULTATO
function risultato() {
    for (let i = 0; i < 2; i++) {
        let creazionePar = document.createElement('p')
        creazionePar.setAttribute('class', 'risultati')
        risultatiWrapper.appendChild(creazionePar)
        paragrafi.push(creazionePar)
    }
}
risultato()

export default paragrafi