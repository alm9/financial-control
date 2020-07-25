import React from 'react';
import './table.css';

export default function Table({ link }) {
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
          <tr>
            <td>01</td>
            <td>Lazer</td>
            <td>Viagem para a praia</td>
            <td>R$ 900,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
