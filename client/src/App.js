import React from 'react';
import Table from './components/Table';
import Bar from './components/Bar';
const LINK = 'http://localhost:3001/api/transaction?period=2019-03'; //LOCAL

export default function App() {
  return (
    <span>
      <h3 style={{ textAlign: 'center' }}>Controle Financeiro Pessoal</h3>
      <br />
      <div className="container">
        <Bar link={LINK} />
        <Table link={LINK} />
      </div>
    </span>
  );
}
