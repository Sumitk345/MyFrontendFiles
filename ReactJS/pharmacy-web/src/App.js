import './App.css';
import { mockmedicines, mockmedicinescard } from './Index/mockdata';
import { useState } from 'react';
import Product from './Product/product';
import Indexpage from './Index/indexpage';
import Login from './Login/login';
import Signup from './Login/signup';

function App() {
  let [medicines, storemedicines] = useState(mockmedicines);
  let [medicinecard, storemedicinecard] = useState(mockmedicinescard);
  let demodata = 80;

  return (
    <div className="App">
      <Indexpage medicines={medicines} pageno={demodata} />
      <Product medicinecard={medicinecard} />
      <Login />
      <Signup/>
    </div>
  );
}


export default App;
