import React from 'react';
import { MdShoppingBasket, MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '~/assets/fruits.svg';

import { Container, Cart, Login, MenuItems, Title } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Title to="/">
        <img src={logo} alt="Random Store" width="100px" height="100px" />
        <strong>Somerandomstore</strong>
        <span>The best place to buy random shit!</span>
      </Title>
      <MenuItems>
        <Login to="/login">
          <div>
            <strong>You are not logged in yet</strong>
            <span>Log In!</span>
          </div>
          <MdPerson size={36} color="#FFF" />
        </Login>
        <Cart to="/cart">
          <div>
            <strong>My cart</strong>
            <span>{cartSize} items</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </MenuItems>
    </Container>
  );
}
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
