import './App.css';
import { mockmedicines, mockmedicinescard } from './Index/mockdata';
import { useState } from 'react';
import Product from './Product/product';
import Indexpage from './Index/indexpage';
import Login from './Login/login';
import Signup from './Login/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Index/header';


function App() {
  let [medicines, storemedicines] = useState(mockmedicines);
  let [medicinecard, storemedicinecard] = useState(mockmedicinescard);
  let demodata = 80;

  return (
    <div className="App">
      {/* <Indexpage medicines={medicines} pageno={demodata} />
      <Product medicinecard={medicinecard} />
      <Login />
      <Signup /> */}

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Header/>}>
            <Route path="" element={<Indexpage medicines={medicines} pageno={demodata} />} />
            <Route path="/product" element={<Product medicinecard={medicinecard} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="*" element={<h1>404 - Not found</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;
