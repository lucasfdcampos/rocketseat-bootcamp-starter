const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idades = usuarios.map((usuario) => usuario.idade);
console.log(idades);

// 2.2 Utilizando o filter
// Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat
// e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const usersRocketseat = usuarios.filter(
  (usuario) => usuario.empresa === 'Rocketseat' && usuario.idade > 18
);
console.log(usersRocketseat);

// 2.3 Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa
// Google: undefined

const usersGoogle = usuarios.find((usuario) => usuario.empresa === 'Google');
console.log(usersGoogle);

// 2.4 Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um
// filtro nos usuários que possuem no máximo 50 anos

const usersSenior = usuarios
  .map((users) => ({ ...users, idade: users.idade * 2 }))
  .filter((users) => users.idade <= 50);

console.log(usersSenior);
