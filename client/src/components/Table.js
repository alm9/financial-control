import React from 'react';
import './table.css';
import { remove } from './crud';

export default function Table({ vetor }) {
  const excluir = (event) => {
    remove(event.target.id);
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
            <th></th>
          </tr>
          {vetor &&
            vetor.map((item) => (
              <tr className={`t${item.type}`} key={item._id}>
                <td>{item.day}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.value}</td>
                <td>
                  <input
                    className="bttDelete"
                    id={item._id}
                    type="button"
                    value="X"
                    onClick={excluir}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
