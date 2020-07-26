import React from 'react';
import './button.css';
import Adicionar from './Adicionar';

export default function Button({ addLancamento }) {
  const [showAddNew, setShowAddNew] = React.useState(false);
  const handleClickButton = () => {
    setShowAddNew(!showAddNew);
  };

  return (
    <div className="page-wrapper">
      <a className="btn" invisible="true" onClick={handleClickButton}>
        Adicionar Lançamento
      </a>
      {showAddNew && (
        <Adicionar cancel={handleClickButton} addLancamento={addLancamento} />
      )}
    </div>
  );
}
