import React, { useState } from "react";
import { Route } from 'react-router-dom';

import Nav from './components/Nav'
import Homepage from './components/Homepage';
import Form from './components/Form';
import Confirmation from './components/Confirmation';

const initialValues = {
  name: '',
  size: '',
  sauce: '',
  topping: '',
  note: ''
}

const App = () => {
  const [values, setValues] = useState(initialValues);

  // https://reqres.in/api/orders

  const update = (name, value) => {
    setValues({...values, [name]: value});
    console.log(name, value)
  }

  return (
    <>
    <Nav />
      <Route path='/confirmation'>
        <Confirmation component={Confirmation} />
      </Route>
      <Route path='/pizza'>
        <Form component={Form} values={values} update={update} />
      </Route>
      <Route exact path="/">
        <Homepage component={Homepage} />
      </Route>
    </>
  );
};
export default App;
