import React from 'react';
import Button from './Button';

export default function Bar2({ onChangeFilter, link, addLancamento }) {
  const handleOnChangeInput = (event) => {
    const filtro = event.target.value;
    onChangeFilter(filtro);
  };

  return (
    <div className="row">
      <div className="col s12 m4">
        <Button addLancamento={addLancamento} />
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
