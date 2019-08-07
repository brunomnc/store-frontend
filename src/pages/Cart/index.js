import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Amount</th>
            <th>Total: </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://www.bigbasket.com/media/uploads/p/l/10000063_20-fresho-broccoli.jpg"
                alt="Broccoli"
              />
            </td>
            <td />
            <td>
              <strong>Broccoli very gut</strong>
              <span>$33.3</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$67.32</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Order now!</button>
        <Total>
          <span>Total</span>
          <strong>$543.22</strong>
        </Total>
      </footer>
    </Container>
  );
}
