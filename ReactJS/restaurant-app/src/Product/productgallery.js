import Singleproduct from "./singleproduct";
import { useContext } from "react";
import ProductContext from "./productcontext";

let Productgallery = ({ medicinecard, selectedcategory }) => {
      let { selectedsubcategory } = useContext(ProductContext);
      let { searchQuery } = useContext(ProductContext);
      let { selectSort } = useContext(ProductContext);

      const filteredByCategory = selectedcategory.length === 0 || selectedcategory.includes("All")
            ? medicinecard
            : medicinecard.filter(item => selectedcategory.includes(item.foodtype));

      // Step 2: Filter by selected subcategories
      const filteredBySubCategory = selectedsubcategory.length === 0 || selectedsubcategory.includes("All")
            ? filteredByCategory
            : filteredByCategory.filter(item => selectedsubcategory.includes(item.foodcategory));


      const filteredBySubCategorySearch = filteredBySubCategory.filter(item =>
            item.receipename.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const filteredBySort = selectSort === ""
            ? filteredBySubCategorySearch
            : filteredBySubCategorySearch.sort((a, b) => {
                  if (selectSort === "A-Z") {
                        return a.receipename.localeCompare(b.receipename);
                  }
                   else if (selectSort === "Z-A") {
                        return b.receipename.localeCompare(a.receipename);
                  }
                   else if (selectSort === "high-low") {
                        return parseFloat(b.details.cost.replace("Rs.", "")) - parseFloat(a.details.cost.replace("Rs.", ""));
                  }
                   else if (selectSort === "low-high") {
                        return parseFloat(a.details.cost.replace("Rs.", "")) - parseFloat(b.details.cost.replace("Rs.", ""));
                  } 
                  else {
                        return 0;
                  }
            });



      return (

            <div className="card-container p-4 p-lg-3 pt-lg-2 ps-lg-1 overflow-y-scroll " style={{ maxHeight: "100%" }}>

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