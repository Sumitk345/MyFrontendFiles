import { useContext } from "react";
import ProductContext from "./productcontext";

let Subcategory = ({ }) => {
      let {selectMultipleSubCategory} = useContext(ProductContext);
      let {dataState} = useContext(ProductContext);
      let {selectedcategory} = useContext(ProductContext)
      
      const uniquesubcategory = () =>
            Array.from(
                  new Set(
                        selectedcategory.length === 0 || selectedcategory.includes("All")
                              ? dataState.map(item => item.location)
                              : dataState.filter(item => selectedcategory.includes(item.type)).map(item => item.location)
                  )
            );


      return (
            <div className="col border border-3 p-2 d-flex flex-column">
                  <h5>Sub Category</h5>
                  <div className="radiobtn">
                        <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="All" id="All" onChange={(e)=>selectMultipleSubCategory(e)} />
                              <label class="form-check-label mt-1" htmlFor="All">All</label>
                        </div>
                        {uniquesubcategory().map(item =>
                              <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value={item} id={item} onChange={(e)=>selectMultipleSubCategory(e)}/>
                                    <label class="form-check-label mt-1" htmlFor={item} >{item}</label>
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default Subcategory;