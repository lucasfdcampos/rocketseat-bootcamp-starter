const usuario = {
  nome: 'Lucas',
  idade: 29,
  endereco: {
    cidade: 'Arapongas',
    estado: 'PR',
  },
};

const {
  nome,
  idade,
  endereco: { cidade },
} = usuario;

console.log(nome, idade, cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
