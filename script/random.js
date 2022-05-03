let randomArr = []
function random(numeroParole) {
    let num = Math.floor(Math.random() * numeroParole)
    randomArr.includes(num) ? random(numeroParole) : randomArr.push(num)
}
function getRandomNum(numeroParole) {
    for (let i = 0; i < numeroParole; i++) {
        random(numeroParole)
    }
}

export  {randomArr, getRandomNum}
