import React from 'react';
import './table.css';

export default function Table({ vetor }) {
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
