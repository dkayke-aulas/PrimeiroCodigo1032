const [form] = document.querySelectorAll('form')

// function submeter() {
//     console.log('Form submetido!')
// }

// -- forma 1
// const inputUsuario = document.querySelector('[name="usuario"]')
// const valueUsuario = inputUsuario?.value
// console.log(usuario)

//  -- forma 2
// form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     // const [login_form] = document.forms
//     const { login_form } = document.forms

//     console.log(login_form.usuario.value)
//     console.log(login_form.senha.value)
//     console.log(login_form.salvar.value)

//     const req = {
//         usuario: login_form.usuario.value,
//         senha: login_form.senha.value,
//         salvar: login_form.salvar.value
//     }

//     console.log(req)
// })

//  -- forma 3
function submeterFormDataLogin() {
    const fd = new FormData(form)

    // const entradas = fd.entries() // [ ['chave', 'valor'], ['chave', 'valor'], ['chave', 'valor']]

    // for(item of fd) {
    //     // console.log(item[0], item[1])
    // }
    fd.append('token', '0as9d-0a9-0d9a-09d-a0')

    fd.delete('cpf')

    const req = {}

    // const frutas = ['pitanga', 'banana', 'pessego']

    // for(item of frutas) {
    //     console.log(item)
    // }

    for([chave, valor] of fd) {
        req[chave] = valor
    }


    console.log(req)
}

