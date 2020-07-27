//Comunicação do frontend com o backend por meio de métodos http

const LINK = 'http://localhost:3001/api/transaction';

const get = async (url) => {
  const buscar = await fetch(url, {
    method: 'GET',
  });
  let resposta = await buscar.json();
  // console.log(resposta);
  return resposta;
};

const post = async (novoDado) => {
  const buscar = await fetch(LINK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoDado),
  });
  let resposta = await buscar.json();
  // console.log(resposta);
};

const remove = async (id) => {
  const buscar = await fetch(LINK + `/${id}`, {
    method: 'DELETE',
  });
  let resposta = await buscar.json();
  // console.log(resposta);
};

export { get, post, remove };
