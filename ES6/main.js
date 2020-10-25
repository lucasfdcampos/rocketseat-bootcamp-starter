const usuario = {
  nome: 'Lucas',
  idade: 29,
  empresa: 'Deva Cardans',
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));
