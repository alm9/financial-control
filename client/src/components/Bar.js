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
    setLancamentos(await get(link));
  };

  return <div>Lançamentos: {lancamentos}</div>;
}
