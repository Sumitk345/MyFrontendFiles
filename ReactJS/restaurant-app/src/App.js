import { useState } from 'react';
import './App.css';
import Product from './Product/product'
import { mockReceipes } from './Product/mockdata';

function App() {
  let [Receipes,setmockReceipes] = useState(mockReceipes);

  return (
    <div className="App">
      <Product medicinecard={Receipes}/>
    </div>
  );
}

export default App;
