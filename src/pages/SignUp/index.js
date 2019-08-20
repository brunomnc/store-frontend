import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import fruit from '~/assets/fruits2.svg';
import { signUpRequest } from '~/store/modules/auth/actions';
import { Wrapper, Content } from '~/pages/Login/styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('Required field'),
  password: Yup.string()
    .min(4, 'Minimun 4 characters')
    .required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, age, email, password }) {
    dispatch(signUpRequest(name, age, email, password));
  }

  return (
    <Wrapper>
      <Content>
        <img src={fruit} alt="Somerandomstore" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Your name" />
          <Input name="age" type="number" placeholder="Your age" />
          <Input name="email" type="email" placeholder="Your e-mail" />
          <Input name="password" type="password" placeholder="Password" />
          <button type="submit">Create Account</button>
          <Link to="/login">Already have an account!</Link>
        </Form>
      </Content>
    </Wrapper>
  );
}
