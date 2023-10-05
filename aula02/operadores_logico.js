const ingresso = 0
const sexo = 'E'

let res = false

const ehMulher = sexo === 'F'
const ehHomem = sexo === 'M'
const possuiIngresso = ingresso > 0

if(ehMulher || (ehHomem && possuiIngresso)) {
    console.log('1, pode entrar!')
    res = true
}
else {
    console.log('2, não pode entrar!')
    res = false
}

