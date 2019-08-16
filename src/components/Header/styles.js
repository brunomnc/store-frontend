import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const MenuItems = styled.div`
  display: grid;
  justify-items: end;
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  strong {
    display: block;
    color: #fff;
    transition: color 0.5s;
    margin: 0 0 0 10px;
    font-size: 22px;

    &:hover {
      color: ${darken(0.02, '#7159c1')};
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Login = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin: 0 0 20px 0;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
