import { useState } from "react";
import Singlecard from "./singlecard";

let Cardgallery = ({medicines,count}) => {
      return (
            <div className="container-fluid ">
            {/* <h2>{count}</h2> */}
                  <div className="card-section d-flex overflow-x-scroll gap-5 py-3">
                        {medicines.map(item =>
                              <Singlecard data={item} />
                        )}
                  </div>
            </div>
      );
}

export default Cardgallery;