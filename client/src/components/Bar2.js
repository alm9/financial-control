import React from 'react';
import { post } from './crud';
import Button from './Button';

export default function Bar2({ onChangeFilter, link }) {
  const handleOnChangeInput = (event) => {
    const filtro = event.target.value;
    onChangeFilter(filtro);
  };

  const handleOnClickButton = async () => {
    console.log('botao pressionado');
    try {
      const data = await post(); //link
      console.log('Registro Adicionado!');
    } catch (err) {
      console.log('deu erro:', err);
    }
    // setVetor(filtered.sort((a, b) => a.day - b.day));
  };

  return (
    <div className="row">
      <div className="col s12 m4">
        <Button />
      </div>
      {/* <div className="col s12 m1">
        <input
          type="button"
          value="Novo Lançamento"
          onClick={handleOnClickButton}
        />
      </div> */}
      <div className="col s12 m8">
        <input
          type="text"
          placeholder="Filtrar Descrição"
          onChange={handleOnChangeInput}
        />
      </div>
    </div>
  );
}
