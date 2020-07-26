import React from 'react';
import Table from './components/Table';
import Bar from './components/Bar';
import Bar2 from './components/Bar2';
const LINK = 'http://localhost:3001/api/transaction?period='; //LOCAL

export default function App() {
  const [period, setPeriod] = React.useState('2020-07');
  const [filtro, setFiltro] = React.useState('a');

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
        <Bar link={LINK + period} filter={filtro} />
        <Bar2 onChangeFilter={handleOnChangeFilter} />
        <Table link={LINK + period} filter={filtro} />
      </div>
    </span>
  );
}
