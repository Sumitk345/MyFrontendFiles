import { useContext } from "react";
import ProductContext from "./productcontext";

let Productsearch = () => {
      let {setSearchQuery} = useContext(ProductContext);
      let {searchQuery} = useContext(ProductContext);

      const handleSearchChange = (event) => {
            setSearchQuery(event.target.value);
      };
      return (
            <div className="col border border-3 p-2">
                  <form className="form-inline my-2 my-lg-0 d-flex gap-2">
                        <input
                              className="form-control mr-sm-2"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                              value={searchQuery}
                              onChange={handleSearchChange}
                        />
                        <button
                              className="btn btn-outline-success border border-2 border-success my-0 my-0"
                              type="button"
                        >
                              Search
                        </button>
                  </form>
            </div>
      );
}

export default Productsearch;