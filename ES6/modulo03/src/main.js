const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK');
    }, 2000);
  });

// async function executaPromise() {
//   console.log(await minhaPromise());
// }

// arrow function
const executaPromise = async () => {
  console.log(await minhaPromise());
};

executaPromise();