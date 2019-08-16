import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 250px 0 0 0;

  div {
    max-width: 300px;
    max-length: 300px;

    strong {
      text-decoration: none;
      display: block;
      color: #eee;
      font-size: 22px;
      transition: color 0.5s;

      &:hover {
        color: ${darken(0.04, '#eee')};
      }
    }
  }
`;
