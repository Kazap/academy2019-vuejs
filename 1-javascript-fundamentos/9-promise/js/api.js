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
function listaPessoas(erro) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(!erro) {
          resolve(pessoas)
        } else {
          reject(new Error('Falha ao tentar listar pessoas'))
        }
      }, 1000)
    })
}

const API = { listaPessoas }