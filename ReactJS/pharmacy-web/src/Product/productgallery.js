import Singlecard from "../Index/singlecard";
import Singleproduct from "./singleproduct";
import { useContext } from "react";
import ProductContext from "./productcontext";

let Productgallery = ({ medicinecard, selectedcategory }) => {
      let {selectedsubcategory} = useContext(ProductContext);
      let {searchQuery} = useContext(ProductContext);

      const filteredByCategory = selectedcategory.length === 0 || selectedcategory.includes("All")
            ? medicinecard
            : medicinecard.filter(item => selectedcategory.includes(item.Type));

      // Step 2: Filter by selected subcategories
      const filteredBySubCategory = selectedsubcategory.length === 0 || selectedsubcategory.includes("All")
            ? filteredByCategory
            : filteredByCategory.filter(item => selectedsubcategory.includes(item.SubCategory));


      const filteredBySubCategorySearch = filteredBySubCategory.filter(item =>
            item.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return (

            <div className="card-container p-2 p-lg-0 pt-lg-2 ps-lg-1 overflow-y-scroll pb-lg-2" style={{ maxHeight: "100%" }}>
                  
                  {filteredBySubCategorySearch.map(singlemedicine =>
                        <Singleproduct singlemedicinecard={singlemedicine} />
                  )
                  }
                  <hr className="m-0 p-0"></hr>
                  <p className="d-block m-0"></p>
            </div>
      );
}

export default Productgallery;