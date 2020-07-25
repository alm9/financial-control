//fiz esse arquivo para organizar a comunicação do frontend com o backend
//obs: poderia usar a biblioteca axios

const get = async (endereco) => {
  const buscar = await fetch(endereco, {
    method: 'GET',
  });
  let resposta = await buscar.json();
  // console.log(resposta);
  return resposta;
};

export { get };
