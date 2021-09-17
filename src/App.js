import React, { useState } from "react";
import { Route } from 'react-router-dom';

import Nav from './components/Nav'
import Homepage from './components/Homepage';
import Form from './components/Form';
import Confirmation from './components/Confirmation';


const App = () => {
  const [values, setValues] = useState();


  return (
    <>
    <Nav />
    <Route path='/confirmation'>
      <Confirmation component={Confirmation} />
    </Route>
    <Route path='/pizza'>
      <Form component={Form} />
    </Route>
    <Route path="/">
      <Homepage component={Homepage}/>
    </Route>
    </>
  );
};
export default App;
