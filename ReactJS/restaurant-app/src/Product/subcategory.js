import { useContext } from "react";
import ProductContext from "./productcontext";

let Subcategory = ({ medicinecard, selectedcategory }) => {
      let { selectMultipleSubCategory } = useContext(ProductContext);
      let { setselectSort } = useContext(ProductContext)


      let selectSortOption = (e) => {
            console.log(e.target.value);

            setselectSort(e.target.value)
      }
      const uniquesubcategory = () =>
            Array.from(
                  new Set(
                        selectedcategory.length === 0 || selectedcategory.includes("All")
                              ? medicinecard.map(item => item.foodcategory)
                              : medicinecard.filter(item => selectedcategory.includes(item.foodcategory)).map(item => item.foodcategory)
                  )
            );


      return (
            <><div className="col border border-3 p-2 d-flex flex-column">
                  <h5>Category</h5>
                  <div className="radiobtn">
                        <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="All" id="All" onChange={(e) => selectMultipleSubCategory(e)} />
                              <label class="form-check-label mt-1" htmlFor="All">All</label>
                        </div>
                        {uniquesubcategory().map(item => <div class="form-check">
                              <input class="form-check-input" type="checkbox" value={item} id={item} onChange={(e) => selectMultipleSubCategory(e)} />
                              <label class="form-check-label mt-1" htmlFor={item}>{item}</label>
                        </div>
                        )}
                  </div>
            </div>
                  <div className="p-0">
                        <select id="datalist" className="form-select form-select-lg mb-3 fs-6 text-uppercase" aria-label=".form-select-lg example" onChange={selectSortOption}>
                              <option value="-1">Select Category</option>
                              <option value="high-low">high-low</option>
                              <option value="low-high">low-high</option>
                              <option value="A-Z">A-Z</option>
                              <option value="Z-A">Z-A</option>
                        </select>
                  </div>
            </>
      );
}

export default Subcategory;