const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

// 4.1 Desestruturação simples

// Utilize a desestruturação para transformar as propriedades nome, cidade
// e estado em variáveis, no fim deve ser possível fazer o seguinte:

const {
  nome,
  endereco: { cidade, estado },
} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2 Desestruturação em parâmetros

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
