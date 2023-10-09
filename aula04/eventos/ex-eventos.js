

const [btn1, btn2] = document.querySelectorAll('button')

function log() {
    console.log('chamou a função')
}

btn1.addEventListener('click', () => console.log(''))


function removeLog() {
    btn1.removeEventListener('click', log)
}

btn2.addEventListener('click', removeLog)



// ----------------------------------------

function minhaFuncao() {

}

const novaFuncao = function () {
    return true
}

const funcaoArrow = () => {
    // não tem contexto (this)
    return true
}


const funcaoArrow2 = () => true

