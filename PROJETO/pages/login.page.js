const login = document.createElement('form')
login.setAttribute('id', 'p-login')

const Login = () => {
    login.innerHTML = `
        <input type='text'>
        <input type='password'>
        <button type='submit'>Entrar</button>
    `
    return login
}

export { Login }
