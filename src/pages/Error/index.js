import React from 'react';
import error from '~/assets/oldman.svg';
import { Container } from './styles';

export default function Error() {
  return (
    <Container to="/">
      <div>
        <img src={error} alt="403" />
        <strong>403, that means GET OUT OF MY LAWN!</strong>
      </div>
    </Container>
  );
}
