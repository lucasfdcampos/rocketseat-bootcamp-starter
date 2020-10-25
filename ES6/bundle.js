"use strict";

var usuario = {
  nome: 'Lucas',
  idade: 29,
  endereco: {
    cidade: 'Arapongas',
    estado: 'PR'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
