const root = document.getElementById('root')
const clock = document.getElementById('clock')

// clock.innerHTML = "<a href='#'>Banana</a>"


const idInterval = setInterval(
    () => {
        const data = new Date()
        const dia = data.getDay()
        const mes = data.getMonth()
        const ano = data.getFullYear()
        const hora = data.getHours()
        const minuto = data.getMinutes()
        const segundo = data.getSeconds()

        // clock.innerText = dia + "/" + mes + "/" + ano
        clock.innerText = `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`
    },
    1000
)

// clearInterval(idInterval)
// clearTimeout(idTimeout)

// const idTimeout = setTimeout(
//     () => {
//         console.log('executou o timeout')
//         clearInterval(idInterval)
//     },
//     5000
// )