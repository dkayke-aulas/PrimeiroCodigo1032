function calcular(x, calculo) {
    const y = 20
    if(x >= 10) {
        calculo(x, y)
    }
}

function somar(x, y) {
    console.log(x + y)
}

function subtrair(x, y) {
    console.log(x - y)
}

calcular(50, somar)
calcular(50, subtrair)


// ------------------


const [anchor1, anchor2] = document.querySelectorAll('a')

function navegarParaPagina1(evento) {
    evento.preventDefault()
    console.log(evento.target.href)
    // window.location.href =  evento.target.href
}

anchor1.addEventListener('click', navegarParaPagina1)
anchor1.addEventListener('click', calcular)
anchor1.addEventListener('mouseover', navegarParaPagina1)


anchor1.removeEventListener('click', calcular)


anchor2.addEventListener('click', navegarParaPagina1)



