import React, { useState, useEffect } from "react";
import { Route, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/formSchema';

import Nav from './components/Nav'
import Homepage from './components/Homepage';
import Form from './components/Form';
import Confirmation from './components/Confirmation';
import Contact from './components/Contact';

const initialValues = {
  name: '',
  size: '',
  sauce: '',
  topping: '',
  note: ''
}

const initialErrors = {
  name: '',
  size: '',
  sauce: '',
  topping: ''
}

const initialOrders = [];

const App = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [orders, setOrders] = useState(initialOrders);
  const [disabled, setDisabled] = useState(true);


  const update = (name, value) => {
    validate(name, value);
    setValues({...values, [name]: value});
    console.log(name, value);
  };

  const submit = () => {
    const newOrder = {
      name: values.name,
      size: values.size,
      sauce: values.sauce,
      topping: values.topping,
      note: values.note
    }
    postOrder(newOrder);
    setOrders([ ...orders, newOrder ])
  };

  // const getOrders = () => {
  //   axios.get('https://reqres.in/api/orders')
  //     .then(res => {
  //       console.log(res.data);
  //       // setOrders(res.data);
  //     })
  // }

  const postOrder = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([ ...orders, res.data ])
        setValues(initialValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  // useEffect(() => {
  //   getOrders()
  // }, [])

  useEffect(() => {
    schema.isValid(values)
    .then(valid => setDisabled(!valid))
  }, [values])

  return (
    <>
      <Nav />

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path='/confirmation'>
        <Confirmation component={Confirmation} />
      </Route>

      <Route path='/pizza'>
        <Form component={Form} 
              values={values} 
              update={update} 
              submit={submit} 
              errors={errors} 
              disabled={disabled}/>
      </Route>

      <Route exact path="/">
        <Homepage />
      </Route>
    </>
  );
};
export default App;
