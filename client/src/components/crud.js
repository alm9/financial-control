//Comunicação do frontend com o backend por meio de métodos http

const LINK = 'http://localhost:3001/api/transaction';

const get = async (url) => {
  const buscar = await fetch(url, {
    method: 'GET',
  });
  return await buscar.json();
};

const post = async (novoDado) => {
  const buscar = await fetch(LINK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoDado),
  });
  return await buscar.json();
};

const remove = async (id) => {
  const buscar = await fetch(LINK + `/${id}`, {
    method: 'DELETE',
  });
  return await buscar.json();
};

const put = async (id, dadosAlterados) => {
  const buscar = await fetch(LINK + `/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dadosAlterados),
  });
  return await buscar.json();
};

export { get, post, remove };
