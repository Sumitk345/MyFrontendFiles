import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Carousel from './components/carousel';
import Searchbar from './components/searchbar';
import Cards from './components/cards';
import ProductContext from './components/productcontext';
import Category from './components/category';
import Subcategory from './components/subcategory';
import { data } from './components/cards'; 


function App() {
  let [selectedcategory, storeselectedcategory] = useState([]);
  let [selectedsubcategory, storeSelectedSubcategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dataState, setdata] = useState(data);



  let selectMultipleFoodCategory = (event) => {
    var s1 = new Set(selectedcategory);
    if (event.target.checked == true) {
      s1.add(event.target.value);
    }
    else {
      s1.delete(event.target.value);
    }

    storeselectedcategory(Array.from(s1));
  }

  let selectMultipleSubCategory = (event) => {
    var s2 = new Set(selectedsubcategory);
    if (event.target.checked == true) {
      s2.add(event.target.value);
    } else {
      s2.delete(event.target.value);
    }
    storeSelectedSubcategory(Array.from(s2));
  };

  
  return (
    <ProductContext.Provider value={{ selectedcategory, selectMultipleFoodCategory, selectedsubcategory, selectMultipleSubCategory, searchQuery, setSearchQuery , dataState }}>
      <div className="App">
        <Header />
        <Carousel />
        <Searchbar />
        <div className="container-fluid row g-0 pb-2" style={{ "height": "calc(100vh - 76.86px)", "maxHeight": "fit-content" }}>
          <div className="col-lg-4 p-2 ps-1 d-flex flex-column ">
            <div className=" container-fluid collapse d-lg-flex flex-column  px-3 flex-lg-grow-1 pt-lg-2"
              id="collapseExample">
              <div class="row row-cols-1 gap-1 h-100 d-grid" style={{ "grid-template-rows": "auto auto 1fr" }}>
                <Category />
                <Subcategory />
              </div>
            </div>
          </div>
          <div className="col-lg-8 py-2 g-0 pe-2" style={{ maxHeight: "100%" }}>
            <Cards />
          </div>
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
