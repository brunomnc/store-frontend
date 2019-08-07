import React from 'react';
import { MdShop, MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <MdShop color="#FFF" size={54} alt="Store" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
