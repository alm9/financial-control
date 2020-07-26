import React, { useEffect, useState } from 'react';
import { get } from './crud';
import './table.css';

export default function Table({ link }) {
  const [vetor, setVetor] = useState(null);

  useEffect(() => {
    getVetor();
    return () => {
      // clearInterval();
    };
  }, [link]);

  const getVetor = async () => {
    const todos = await get(link);
    setVetor(todos.sort((a, b) => a.day - b.day));
  };

  return (
    <div className="panel-body">
      <table>
        <tbody>
          <tr>
            <th>Dia</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
          {vetor &&
            vetor.map((item) => (
              <tr className={`t${item.type}`} key={item._id}>
                <td>{item.day}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
