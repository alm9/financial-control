import React from 'react';

export default function Bar({ vetor }) {
  const [lancamentos, setLancamentos] = React.useState(0);
  const [receitas, setReceitas] = React.useState(0);
  const [despesas, setDespesas] = React.useState(0);
  const [saldo, setSaldo] = React.useState(0);

  React.useEffect(() => {
    refreshBar();
    return () => {
      // clearInterval();
    };
  }, [vetor]);

  const refreshBar = async () => {
    let receitas = 0,
      despesas = 0;
    console.log('vetor', vetor);

    if (vetor === null) return;
    vetor.forEach((item) => {
      if (item.type === '-') despesas += item.value;
      else receitas += item.value;
    });
    const saldo = receitas - despesas;
    setLancamentos(vetor.length);
    setReceitas(receitas);
    setDespesas(despesas);
    setSaldo(saldo);
  };

  return (
    <div className="row">
      <div className="col s12 m3">
        <p>Lançamentos: {lancamentos}</p>
      </div>
      <div className="col s12 m3">
        <p>Receitas: {receitas}</p>
      </div>
      <div className="col s12 m3">
        <p>Despesas: {despesas}</p>
      </div>
      <div className="col s12 m3">
        <p>Saldo: {saldo}</p>
      </div>
    </div>
  );
}
