import { uniquecategory } from "../Index/mockdata";

let Category = ({storeselectedcategory}) => {
      const handleCategoryChange = (e) => {
            storeselectedcategory(e.target.id);  // Update the selected category when checkbox is clicked
      };
      return (
            <div className="col border border-3 p-2 d-flex flex-column">
                  <h5>Category</h5>
                  <div className="radiobtn">
                        <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="All" onChange={handleCategoryChange} />
                              <label class="form-check-label mt-1" htmlFor="All">All</label>
                        </div>
                        {uniquecategory().map(item =>
                              <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id={item} onChange={handleCategoryChange} />
                                    <label class="form-check-label mt-1" htmlFor={item} >{item}</label>
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default Category;