// const string = ['supra', 'rx7', 'gtr']
// const numeros = [2, 3, -40]
// // const arrayMisto = ['gabinete', 9, false]
// // const arrayUnica = [38]
// // const arrayVazia = []

// // console.log('Tamanho do array String', string.length)
// // console.log(string[3]) // vai dar undefined pois indice 3 n existe

// // console.log('O que tem no indice 0 do arrayMisto', arrayMisto[0])
// // console.log('O que tem no indice 1 do arrayMisto', arrayMisto[1])
// // console.log('O que tem no indice 2 do arrayMisto', arrayMisto[2])

// // console.log('Qual o valor do unico indice de arrayUnica?', arrayUnica[0])
// // console.log('Qual o tamanho da array arrayUnica?', arrayUnica.length)

// const copiaString = string.slice()
// console.log('Conteúdo da array string:', string)
// console.log('Conteúdo da array copiaString:', copiaString)

// copiaString.push('nsx')
// console.log('copiaString depois da adição:', copiaString)
// console.log('string para comparar:', string)

// copiaString.splice(2, 2)
// console.log('copiaString dps de remover 2:', copiaString)

// console.log('string antes de ser organizada:', string)
// string.sort()
// console.log('string dps de ser organizada:', string)

// console.log('numeros antes de ser organizado:', numeros)
// numeros.sort()
// console.log('numeros dps de ser organizado;', numeros)

const numerosAula = [12, 9, -12, 1, 50, 19, -9, 8, 7]
console.log('numerosAula na ordem original:', numerosAula)

numerosAula.sort()
console.log('numerosAula ordenado:', numerosAula)

numerosAula.reverse()
console.log('numerosAula em ordem reversa:', numerosAula)

numerosAula.pop()
console.log('numerosAula sem ultimo item:', numerosAula)

numerosAula.push(6)
console.log('numerosAula com 6 adicionado:', numerosAula)

numerosAula.splice(2, 1)
console.log('numerosAula sem o indice 2:', numerosAula)


