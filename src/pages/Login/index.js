import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Content, Wrapper } from './styles';
import fruit from '~/assets/fruits2.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Wrapper>
      <Content>
        <img src={fruit} alt="GoDog" />
        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Your e-mail" />
          <Input name="password" type="password" placeholder="Password" />
          <button type="submit">Submit</button>
          <Link to="register">Sign Up!</Link>
        </Form>
      </Content>
    </Wrapper>
  );
}
