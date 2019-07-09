API.listaPessoas()
  .then(pessoas => {
    console.log(pessoas[1].nome)
  })
  .catch(erro => {
    console.log(erro)
  })