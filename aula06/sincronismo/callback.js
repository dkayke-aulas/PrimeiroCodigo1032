
function entrarNoApp(dados) {
    console.log('logou', dados)
}

function notificarErro() {
    console.log('não foi possivel logar')
}

function recuperarDadosDeLogin() {
    console.log('recuperando dados')
}

function validarDados(fnSucesso, fnErro) {
    console.log('validando dados')
    const random = Math.random()
    const sucesso = random < 0.5
    const dados = {nome: 'Usuario Banana', tipoConta: 'A', random}

    if(sucesso) {
        fnSucesso(dados)
    } else {
        fnErro()
    }
}

function submeter() {
    recuperarDadosDeLogin()
    validarDados(entrarNoApp, notificarErro)
}

submeter()
