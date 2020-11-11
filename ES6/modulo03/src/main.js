import axios from 'axios';

<<<<<<< HEAD
class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      console.log(response);
    } catch (err) {
      console.warn('Erro na API');
    }    
  }
}
=======
// async function executaPromise() {
//   console.log(await minhaPromise());
// }

// arrow function
const executaPromise = async () => {
  console.log(await minhaPromise());
};
>>>>>>> a7e7281ab8976542dab5626fdfdf1f1d0c114a5e

Api.getUserInfo('lucasfdcampos');
