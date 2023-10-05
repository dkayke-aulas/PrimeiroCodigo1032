console.log('iniciou')

const root = document.getElementById('root')

// fábrica de elementos
const textoBotao = document.createTextNode('Meu pastel é mais barato!')
const textoNome = document.createTextNode('Jeferson')
const butao = document.createElement('button')
const paragrafo = document.createElement('p')

// appends
butao.appendChild(textoBotao)
root.appendChild(butao)

paragrafo.appendChild(textoNome)
root.appendChild(paragrafo)

const btn2 = butao.cloneNode(true)

root.appendChild(btn2)

root.insertBefore(paragrafo, butao)

// root.insertBefore(paragrafo, butao) // insere o Jeferson no root, antes do botão


console.log(root)