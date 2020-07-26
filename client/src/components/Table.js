import React, { useEffect, useState } from 'react';
import { get } from './crud';
import './table.css';

export default function Table({ link, filter }) {
  const [vetor, setVetor] = useState(null);

  useEffect(() => {
    getVetor();
    return () => {
      // clearInterval();
    };
  }, [link, filter]);

  const getVetor = async () => {
    const data = await get(link);
    const filtered = data.filter((item) => item.description.includes(filter));
    setVetor(filtered.sort((a, b) => a.day - b.day));
  };

  return (
    <div className="panel-body">
      <table>
        <tbody>
          <tr>
            <th>Dia</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
          {vetor &&
            vetor.map((item) => (
              <tr className={`t${item.type}`} key={item._id}>
                <td>{item.day}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
