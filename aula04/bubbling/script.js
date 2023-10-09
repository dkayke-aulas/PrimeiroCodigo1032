const [btn1] = document.querySelectorAll('button')
const [div] = document.querySelectorAll('div')


btn1.addEventListener(
    'click',
    () => {
        console.log('btn1 true')
    },
    true
)

btn1.addEventListener(
    'click',
    (event) => {
        console.log('fn 2 btn1 false')
        event.stopPropagation()
    },
    false
)

btn1.addEventListener(
    'click',
    (event) => {
        console.log('fn 1 btn1 false')
    },
    false
)

div.addEventListener(
    'click',
    () => console.log('div true'),
    true
)

div.addEventListener(
    'click',
    () => console.log('div false'),
    false
)

// callstack