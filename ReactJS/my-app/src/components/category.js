import { useContext } from "react";
import ProductContext from "./productcontext";
import { uniquecategory } from "./cards";

let Category = ({storeselectedcategory}) => {
      let {selectMultipleFoodCategory} = useContext(ProductContext);

      return (
            <div className="col border border-3 p-2 d-flex flex-column">
                  <h5>Category</h5>
                  <div className="radiobtn">
                        <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="All" id="All" defaultChecked={true} onChange={(e)=>selectMultipleFoodCategory(e)} />
                              <label class="form-check-label mt-1" htmlFor="All">All</label>
                        </div>
                        {uniquecategory().map(item =>
                              <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value={item} id={item} onChange={(e)=>selectMultipleFoodCategory(e)} />
                                    <label class="form-check-label mt-1" htmlFor={item} >{item}</label>
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default Category;