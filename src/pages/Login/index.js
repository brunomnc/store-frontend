import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Content, Wrapper } from './styles';
import fruit from '~/assets/fruits2.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Wrapper>
      <Content>
        <img src={fruit} alt="Somerandomstore" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Your e-mail" />
          <Input name="password" type="password" placeholder="Password" />
          <button type="submit">{loading ? 'Loading' : 'Submit'}</button>
          <Link to="/register">Sign Up!</Link>
        </Form>
      </Content>
    </Wrapper>
  );
}
