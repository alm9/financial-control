import React from 'react';
import './table.css';

export default function Table() {
  return (
    <div class="container">
      <div class="panel-body">
        <table>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tr>
            <td>01</td>
            <td>Lazer</td>
            <td>Viagem para a praia</td>
            <td>R$ 900,00</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
