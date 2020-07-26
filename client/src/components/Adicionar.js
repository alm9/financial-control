import React from 'react';
import './menuAdd.css';

export default function Adicionar({ text, checkbox }) {
  const [tipoLancamento, setTipoLancamento] = React.useState('Despesa');

  const handleTipoLancamento = () => {
    const mudaTipoLancamento =
      tipoLancamento === 'Despesa' ? 'Receita' : 'Despesa';
    setTipoLancamento(mudaTipoLancamento);
  };

  return (
    <div>
      <div id="Adicionar">
        {tipoLancamento}
        <input
          id="switch-shadow"
          class="switch switch--shadow"
          type="checkbox"
        />
        <input type="checkbox" id="switch" onClick={handleTipoLancamento} />
        <label for="switch"></label>
        <input type="text" placeholder="Dia" />
        <input type="text" placeholder="Categoria" />
        <input type="text" placeholder="Descrição" />
        <input type="text" placeholder="Valor" />
      </div>
    </div>
  );
}
