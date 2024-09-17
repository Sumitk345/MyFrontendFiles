import Singlecard from "../Index/singlecard";
import Singleproduct from "./singleproduct";

let Productgallery = ({ medicinecard , selectedcategory }) => {
      const filteredMedicines = selectedcategory.includes("All") 
    ? medicinecard 
    : medicinecard.filter(item => selectedcategory.includes(item.Type));


      return (
            
            <div className="card-container p-2 p-lg-0 pt-lg-2 ps-lg-1 overflow-y-scroll" style={{maxHeight:"100%"}}>
                  {filteredMedicines.map(singlemedicine => 
                        <Singleproduct singlemedicinecard={singlemedicine} />
                  )
                  }
            </div>
      );
}

export default Productgallery;