import React from 'react';
import { post } from './crud';
import './menuAdd.css';

export default function Adicionar({ text, checkbox, cancel, addLancamento }) {
  const [tipoLancamento, setTipoLancamento] = React.useState(false);

  const handleTipoLancamento = () => {
    // console.log(tipoLancamento);
    setTipoLancamento(!tipoLancamento);
  };

  const handleOnClickButton = async () => {
    try {
      const novoLancamento = {};
      //prettier-ignore
      novoLancamento.yearMonthDay = document.getElementById('dataLancamento').value;
      //prettier-ignore
      novoLancamento.yearMonth = document.getElementById('dataLancamento').value.substring(0, 7);
      //prettier-ignore
      [novoLancamento.year, novoLancamento.month, novoLancamento.day]
                        = novoLancamento.yearMonthDay.split('-').map( Number )
      //Categoria
      novoLancamento.category = document.getElementById('Categoria').value;
      //Descricao
      novoLancamento.description = document.getElementById('Descricao').value;
      //Valor
      novoLancamento.value = document.getElementById('Valor').value;
      //Tipo
      if (tipoLancamento) novoLancamento.type = '+';
      else novoLancamento.type = '-';
      // console.log(novoLancamento);

      await post(novoLancamento);
      addLancamento(); //atualizar
      cancel(); //fechar
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
        <input
          id="dataLancamento"
          type="date"
          placeholder="Dia"
          // value={new Date().toLocaleDateString('en-CA')}
          // onChange={
          //   <script>
          //     let dateControl = document.getElementById('dataLancamento');
          //     console.log('dateControl'); console.log(dateControl);
          //     dateControl.value = '2017-06-01'
          //   </script>
          // }
        />
        <input id="Categoria" type="text" placeholder="Categoria" />
        <input id="Descricao" type="text" placeholder="Descrição" />
        <input id="Valor" type="number" placeholder="Valor" />
        <div className="BotoesLancamento">
          <input
            id="BttAdd"
            type="button"
            value="Ok"
            onClick={handleOnClickButton}
          />
          <input id="BttCancel" type="button" value="X" onClick={cancel} />
        </div>
      </div>
    </div>
  );
}
