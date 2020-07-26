import React from 'react';

export default function Bar2({ onChangeFilter }) {
  const handleOnChangeInput = (event) => {
    const filtro = event.target.value;
    onChangeFilter(filtro);
  };

  return (
    <div className="row">
      <div className="col s12 m4">
        <input type="button" value="Novo Lançamento" />
      </div>
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
