import React, { useEffect, useState } from 'react';
import { get } from './crud';

export default function Bar({ link }) {
  const [lancamentos, setLancamentos] = useState(0);

  useEffect(() => {
    getLancamento();
    return () => {
      // clearInterval();
    };
  }, []);

  const getLancamento = async () => {
    const quantLancamentos = (await get(link)).length;
    setLancamentos(quantLancamentos);
  };

  return <div>Lançamentos: {lancamentos}</div>;
}
