import React from 'react';
import { post } from './crud';
import './menuAdd.css';

export default function Adicionar({ text, checkbox }) {
  const [tipoLancamento, setTipoLancamento] = React.useState(false);

  const handleTipoLancamento = () => {
    console.log(tipoLancamento);
    setTipoLancamento(!tipoLancamento);
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
    <div>
      <div id="Adicionar">
        {tipoLancamento ? 'Receita' : 'Despesa'}
        <input
          id="switch-shadow"
          className="switch switch--shadow"
          type="checkbox"
        />
        <input type="checkbox" id="switch" onClick={handleTipoLancamento} />
        <label htmlFor="switch"></label>
        <input type="date" placeholder="Dia" />
        <input type="text" placeholder="Categoria" />
        <input type="text" placeholder="Descrição" />
        <input type="number" placeholder="Valor" />
        <div className="BotoesLancamento">
          <input
            id="BttAdd"
            type="button"
            value="Ok"
            onClick={handleOnClickButton}
          />
          <input
            id="BttCancel"
            type="button"
            value="X"
            // onClick={handleOnClickButton}
          />
        </div>
      </div>
    </div>
  );
}
