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
  }, []);

  const getVetor = async () => {
    const todos = await get(link);
    setVetor(todos);
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
          {vetor !== null &&
            vetor.map((item) => (
              <tr className="item" key={item._id}>
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
