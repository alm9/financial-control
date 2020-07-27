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
      <span className="btn" invisible="true" onClick={handleClickButton}>
        Adicionar Lançamento
      </span>
      {showAddNew && (
        <Adicionar cancel={handleClickButton} addLancamento={addLancamento} />
      )}
    </div>
  );
}
