function init () {
    console.log('iniciou!')
}

// init()

window.addEventListener('DOMContentLoaded', () => {
    // const divLoading = document.querySelector('[data-load="true"]')
    // divLoading.classList.remove('loading')
    // console.log('DOMContentLoaded - Apenas o DOM carregado')
})

document.addEventListener('readystatechange', (event) => {
    const divLoading = document.querySelector('[data-load="true"]')
    divLoading.classList.add('loading')
    // console.log(event.target.readyState, 1)
    
    if(event.target.readyState === 'interactive') {
        // interactive - está carregando
        console.log(event.target.readyState, 2)
    }

    if(event.target.readyState === 'complete') {
        // complete - o recurso está carregado
        console.log(event.target.readyState, 3)
    }
})

window.addEventListener('load', () => {
    console.log('LOAD - tudo carregado!')
    const divLoading = document.querySelector('[data-load="true"]')
    divLoading.classList.remove('loading')
})