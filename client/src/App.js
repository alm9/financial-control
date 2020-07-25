import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Bar from './components/Bar';
const LINK = 'http://localhost:3001/api/transaction?period='; //LOCAL

export default function App() {
  const [period, setPeriod] = useState('2020-07');

  const handleOnChangeMonth = (event) => {
    setPeriod(event.target.value);
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
        <Bar link={LINK + period} />
        <Table link={LINK + period} />
      </div>
    </span>
  );
}
