function executor(resolve, reject) {
    setTimeout(() => {
        const random = Math.random()
        const sucesso = random < 0.5
    
        if (sucesso) {
            const dados = { nome: 'Usuario Banana', tipoConta: 'A', random }
            resolve(dados)
        }
        else {
            reject('deu ruim!')
        }
    }, 3000)
}

const promise = new Promise(executor)

promise
    .then((resposta) => {
        if(resposta.tipoConta === "B") {
            return resposta
        }
        else {
            return new Error('Erro forçado')  
        }
    })
    .then((resposta2) => {
        console.log('aqui está a resposta', resposta2)
    })
    .catch((erro) => {
        console.log(erro)
    })


const recuperaUsuario = new Promise((_, reject) => {
    setTimeout(() => reject('promessa 1'), 2000)
})

const geraHistorico = new Promise((_, reject) => {
    setTimeout(() => reject('promessa 2'), 1000)
})

const promessas = [recuperaUsuario, geraHistorico]

Promise.all(promessas).then((resposta) => {
    console.log('recuperaUsuario', resposta[0])
    console.log('geraHistorico', resposta[1])
}).catch((erro) => {
    console.log(erro)
})
