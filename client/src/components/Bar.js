import React, { useEffect, useState } from 'react';
import { get } from './crud';

export default function Bar({ link }) {
  const [lancamentos, setLancamentos] = useState(0);
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    refreshBar();
    return () => {
      // clearInterval();
    };
  }, [link]);

  const refreshBar = async () => {
    const data = await get(link);
    let receitas = 0,
      despesas = 0;
    data.forEach((item) => {
      if (item.type === '-') despesas += item.value;
      else receitas += item.value;
    });
    const saldo = receitas - despesas;
    setLancamentos(data.length);
    setReceitas(receitas);
    setDespesas(despesas);
    setSaldo(saldo);
  };

  return (
    <div className="row">
      <div className="col s12 m6 l3">
        <p>Lançamentos: {lancamentos}</p>
      </div>
      <div className="col s12 m6 l3">
        <p>Receitas: {receitas}</p>
      </div>
      <div className="col s12 m6 l3">
        <p>Despesas: {despesas}</p>
      </div>
      <div className="col s12 m6 l3">
        <p>Saldo: {saldo}</p>
      </div>
    </div>
  );
}
