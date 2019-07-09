const numeros = [10, 5, 3, 3, 2, 9]
const pessoas = [
  {
    nome: 'Christie C. Craighead',
    idade: 15
  },
  {
    nome: 'Arlene T. Baker',
    idade: 14
  },
  {
    nome: 'Christie C. Craighead',
    idade: 18
  },
  {
    nome: 'Scott K. Parham',
    idade: 23
  },
  {
    nome: 'Christie C. Craighead',
    idade: 30
  },
  {
    nome: 'Jeremiah J. Lobel',
    idade: 8
  },
  {
    nome: 'Deborah W. Coulter',
    idade: 21
  },
]
const salas = ['A', 'B', 'C', 'D', 'E']

// map

const alunosSalas = pessoas.map(pessoa => {
  return {
    ...pessoa,
    sala: salas[Math.floor(Math.random()*salas.length)]
  }
})

// filter

const alunosMaioresDeIdade = pessoas.filter(pessoa => {
  return pessoa.idade >= 18
})

// reduce
const valorInicial = 0
const somaDosNumeros = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual
}, valorInicial)