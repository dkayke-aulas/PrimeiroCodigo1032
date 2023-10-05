const frutas = [
    'banana',
    'uva',
    'pera',
    'kiwi',
    'pitanga',
    'pitaya',
    'fruta do conde',
    'jambolão',
    'nectarina',
    'tomate',
    'romã'
]

// const cloneFrutas = frutas.slice()
// spread
const cloneFrutas = [...frutas]

cloneFrutas[1] = 'damasco'

console.table(frutas)
console.table(cloneFrutas)
console.clear()

const usuario = ['Dannyel', 35, true]

const [nome, idade, possuiHabilitacao] = usuario
 


// desestruturação / rest
const [fruta1, fruta2, ...restante] = frutas

console.log(fruta1, fruta2)
console.table(restante)