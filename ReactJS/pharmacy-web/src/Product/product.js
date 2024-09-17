import Header from "../Index/header";
import Category from "./category";
import Productgallery from "./productgallery";
import Productsearch from "./productsearch";
import Subcategory from "./subcategory";
import { useState } from 'react';


let Product = ({medicinecard}) => {
      let [selectedcategory , storeselectedcategory] = useState("All");

      return (
            <>
                  <Header />
                  <button className="btn btn-primary my-5 mx-2 d-lg-none " type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Filters
                  </button>
                  <div className="container-fluid row g-0 pb-2" style={{ "height": "calc(100vh - 76.86px)", "maxHeight": "fit-content" }}>
                        <div className="col-lg-4 p-2 ps-1 d-flex flex-column ">
                              <div className=" container-fluid collapse d-lg-flex flex-column  px-3 flex-lg-grow-1 pt-lg-2"
                                    id="collapseExample">
                                    <div class="row row-cols-1 gap-1 h-100 d-grid" style={{"grid-template-rows": "auto auto 1fr"}}>
                                          <Category storeselectedcategory={storeselectedcategory}/>
                                          <Subcategory medicinecard={medicinecard} selectedcategory={selectedcategory} />
                                          <Productsearch />
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-8 py-2 g-0 pe-2" style={{maxHeight:"100%"}}>
                              <Productgallery medicinecard={medicinecard} selectedcategory={selectedcategory}/>
                        </div>
                  </div>


            </>
      );
}

export default Product;