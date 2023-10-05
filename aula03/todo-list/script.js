function valorExistente(tarefa) {
    const listItems = document.querySelectorAll('.todo-list > ol > li')
    let existe = false

    listItems.forEach((item) => {
        if (item.textContent === tarefa) {
            existe = true
        }
    })

    return existe
}

function adicionarTarefa() {
    const tarefa = document.querySelector('.todo-list > input').value
    const valorHigienizado = tarefa.trim()
    const existeNaLista = valorExistente(value)

    if (existeNaLista) {
        window.alert('Tarefa já existe!')
    }
    else if (valorHigienizado) {
        const list = document.querySelector('.todo-list > ol')
        const item = document.createElement('li')
        const node = document.createTextNode(value)
        item.appendChild(node)
        list.appendChild(item)
    }
    else {
        window.alert('Você sabe o que está fazendo?')
    }
}

function removerTodasTarefas() {
    const list = document.querySelector('.todo-list > ol')
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}
