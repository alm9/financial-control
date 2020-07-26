//a biblioteca axios realiza a comunicação do frontend com o backend
// import axios from 'axios';
//métodos http para falar com o backend:

const LINK = 'http://localhost:3001/api/transaction';

//sem axios
const get = async (url) => {
  const buscar = await fetch(url, {
    method: 'GET',
  });
  let resposta = await buscar.json();
  // console.log(resposta);
  return resposta;
};

/*com axios*/
// E R R A D O ! ! !
// const get = async (url) => {
//   const res = axios.get(url);
//   console.log('res');
//   console.log(await res);
//   console.log(await res.data);
//   return await res.data;
// };

const post = async () => {
  let novoDado = {
    description: 'Gastando com o Rock',
    value: 25,
    category: 'Pet',
    year: 2020,
    month: 7,
    day: 2,
    yearMonth: '2020-07',
    yearMonthDay: '2020-07-02',
    type: '-',
  };

  const buscar = await fetch(LINK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoDado),
  });
  let resposta = await buscar.json();
  console.log(resposta);
  return resposta;
};

export { get, post };
