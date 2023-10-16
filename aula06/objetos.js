const pessoa = {
    nome: 'Dannyel',
    idade: 26,
    email: 'dannyel@email.com',
    altura: 3.10,
    peso: 69,
    profissao: 'professor',
    nacionalidade: ['brasileiro', 'arabe'],
    estado_civil: ['cansado', 'sortero'],
    filiacao: {
        mae: 'Maria',
        pai: null
    },
    filiacao: {
        mae: 'Eduarda',
        pai: 'Marcio'
    },
    falar: () => 'portugues e varias bost*s'
}


const obj = {...pessoa}

obj.email = 'professor@email.com'

console.log(obj.email)
console.log(pessoa.email)



// const cor = 'verde'
// const nome = 'Vanessa'
// const animal = 'veado'
// const veiculo = 'vião'

// const outroObj = {
//     cor: cor,
//     nome,
//     animal,
//     veiculo
// }

// console.log(outroObj)



// const novoObj = {banana: 'fruta', ...pessoa.filiacao, mae: 'Jão'}

// console.log(novoObj)


// const valores = Object.values(pessoa)
// console.log(valores.length)

// const chaves = Object.keys(pessoa)
// console.log(chaves.length)

// const entradas = Object.entries(pessoa.filiacao)
// console.log(entradas.length)

// [
//     ['chave', 'valor']
// ]


// const atributo = 'filiacao'

// console.log(pessoa.nome)
// console.log(pessoa.email)
// console.log(pessoa.nacionalidade)
// console.log(pessoa.filiacao)
// console.log(pessoa.falar())

// console.log(pessoa['nome'])
// console.log(pessoa['email'])
// console.log(pessoa['nacionalidade'])
// console.log(pessoa['filiacao'])
// console.log(pessoa['falar']())
// console.log(pessoa[atributo]['pai'])

