import axios from 'axios';

// 1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay(console.log('1s'));
  await delay(console.log('2s'));
  await delay(console.log('3s'));
}

umPorSegundo();

// 1.2
const getUserFromGitHub = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe.');
  }
}

getUserFromGitHub('lucasfdcampos');

// 1.3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('lucasfdcampos/rocketseat-bootcamp-starter');
Github.getRepositories('lucasfdcampos/rocketseat-bootcamp-advanced');

// 1.4
const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
}

buscaUsuario('lucasfdcampos');