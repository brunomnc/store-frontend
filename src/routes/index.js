import { Switch } from 'react-router-dom';
import React from 'react';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Error from '~/pages/Error';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Error} />
    </Switch>
  );
}
