// string - texto ``, '', ""
// number - todo numero, 1, -1, 0.3
// boolean - true ou false

const um = 1
const dois = `2`
const dois_number = 2
const tres = 3

// == igual, valida apenas o valor
// != diferente, valida apenas o valor
// === estritamente igual, valida valor e o tipo
// !== estritamente deferente, valida e o tipo

// if (um === dois) {
//     console.log(1, "true")
// }
// else {
//     console.log(1, "false", '\n')
// }

// if (dois != dois) {
//     console.log(2, "é diferente (valor)")
// }
// else if(dois === dois) {
//     console.log(2, "é estritamente igual")
// }
// else {
//     console.log(2, "é igual no valor, diferente no tipo")
// }

// switch (dois) {
//     case 1:
//         console.log('é 1')
//         break
//     case '2':
//     case 2:
//         console.log('é 2')
//         break
//     case 3:
//         console.log('é 3')
//         break
//     default:
//         console.log('não foi identificado o valor')
//         break
// }

const ehDiferenteDeDois = tres === 2 ? 'é 2!': tres === 1 ? 'é um!' : 'não é um e nem dois!'

if(tres === 2) {
    // é 2
}
else if(tres === 1) {
    // é um!
}
else {
    // 'não é um e nem dois!'
}


console.log(ehDiferenteDeDois)