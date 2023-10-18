const notFound = document.createElement('div')
notFound.setAttribute('id', 'p-notFound')

const NotFound = () => {
    notFound.innerHTML = `
        <h1>Página não encontrada :(</h1>
        <a href="#login">Retorne ao login</a>
    `
    return notFound
}

export { NotFound }
