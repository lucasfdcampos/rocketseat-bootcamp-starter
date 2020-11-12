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