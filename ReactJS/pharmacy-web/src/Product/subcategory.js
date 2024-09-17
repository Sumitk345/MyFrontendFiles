import { uniquesubcategory } from "../Index/mockdata";

let Subcategory = ({ medicinecard, selectedcategory }) => {
      const uniquesubcategory = () =>
            Array.from(
                  new Set(
                        selectedcategory.includes("All")
                              ? medicinecard.map(item => item.SubCategory)
                              : medicinecard.filter(item => selectedcategory.includes(item.Type)).map(item => item.SubCategory)
                  )
            );


      return (
            <div className="col border border-3 p-2 d-flex flex-column">
                  <h5>Category</h5>
                  <div className="radiobtn">
                        <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="All" />
                              <label class="form-check-label mt-1" htmlFor="All">All</label>
                        </div>
                        {uniquesubcategory().map(item =>
                              <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id={item} />
                                    <label class="form-check-label mt-1" htmlFor={item} >{item}</label>
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default Subcategory;