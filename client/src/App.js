import React from 'react';
import Table from './components/Table';
import Bar from './components/Bar';
import Bar2 from './components/Bar2';
import { get } from './components/crud';
const LINK = 'http://localhost:3001/api/transaction?period='; //LOCAL

export default function App() {
  const [period, setPeriod] = React.useState('2020-07');
  const [filtro, setFiltro] = React.useState('');
  const [vetor, setVetor] = React.useState(null);

  const addLancamento = () => {
    // console.log('Novo lançamento feito');
  };

  React.useEffect(() => {
    getVetor();
    return () => {
      // clearInterval();
    };
  }, [filtro, addLancamento]);

  const getVetor = async () => {
    const data = await get(LINK + period);
    const filtered = data.filter((item) => item.description.includes(filtro));
    setVetor(filtered.sort((a, b) => a.day - b.day));
  };

  const handleOnChangeMonth = (event) => {
    setPeriod(event.target.value);
  };

  const handleOnChangeFilter = (filtro) => {
    setFiltro(filtro);
  };

  return (
    <span>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3>Controle Financeiro Pessoal</h3>
        <br />
        <input
          type="month"
          min="2019-01"
          value={period}
          max="2021-01"
          onChange={handleOnChangeMonth}
        />
        <Bar vetor={vetor} />
        <Bar2
          onChangeFilter={handleOnChangeFilter}
          link={LINK}
          addLancamento={addLancamento}
        />
        <Table vetor={vetor} />
      </div>
    </span>
  );
}
