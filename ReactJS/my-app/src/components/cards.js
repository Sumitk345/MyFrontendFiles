import Infocard from "./infocard"
import { useContext } from "react";
import ProductContext from "./productcontext";

const data = [
      {
            "id": 1,
            "date": "12-Mar-2021",
            "review": "Review 205",
            "title": "BYD atto 3",
            "type": "Sedan",
            "image": "car1.jpg",
            "mileage": "45000 KM",
            "location": "Mumbai",
            "engine": "3.5 Diesel",
            "transmission": "Automatic",
            "price": "Rs 1,60,000"
      },
      {
            "id": 2,
            "date": "15-Apr-2021",
            "review": "Review 310",
            "title": "Skoda Kushaq",
            "type": "Hatchback",
            "image": "car2.webp",
            "mileage": "35000 KM",
            "location": "Mumbai",
            "engine": "2.0 Petrol",
            "transmission": "Manual",
            "price": "Rs 1,20,000"
      },
      {
            "id": 3,
            "date": "20-May-2021",
            "review": "Review 415",
            "title": "Hyundai Exter",
            "type": "SUV",
            "image": "car3.webp",
            "mileage": "30000 KM",
            "location": "Bangalore",
            "engine": "1.8 Petrol",
            "transmission": "Automatic",
            "price": "Rs 1,50,000"
      },
      {
            "id": 4,
            "date": "10-Jun-2021",
            "review": "Review 520",
            "title": "Hyundai Tucson",
            "type": "SUV",
            "image": "car4.jpg",
            "mileage": "60000 KM",
            "location": "Chennai",
            "engine": "3.0 Diesel",
            "transmission": "Automatic",
            "price": "Rs 2,00,000"
      },
      {
            "id": 5,
            "date": "22-Jul-2021",
            "review": "Review 625",
            "title": "Volkswagen Tiguan",
            "type": "Sedan",
            "image": "car5.jpg",
            "mileage": "40000 KM",
            "location": "Hyderabad",
            "engine": "2.2 Diesel",
            "transmission": "Manual",
            "price": "Rs 1,30,000"
      },
      {
            "id": 6,
            "date": "18-Aug-2021",
            "review": "Review 730",
            "title": "Volvo XC60 ",
            "type": "Hatchback",
            "image": "car6.webp",
            "mileage": "25000 KM",
            "location": "Pune",
            "engine": "1.5 Petrol",
            "transmission": "Automatic",
            "price": "Rs 1,40,000"
      },
      {
            "id": 7,
            "date": "25-Sep-2021",
            "review": "Review 835",
            "title": "BMW X5",
            "type": "SUV",
            "image": "car7.webp",
            "mileage": "50000 KM",
            "location": "Kolkata",
            "engine": "2.5 Diesel",
            "transmission": "Manual",
            "price": "Rs 1,70,000"
      },
      {
            "id": 8,
            "date": "30-Oct-2021",
            "review": "Review 940",
            "title": "Toyota Fortuner",
            "type": "SUV",
            "image": "car8.webp",
            "mileage": "55000 KM",
            "location": "Jaipur",
            "engine": "3.0 Petrol",
            "transmission": "Automatic",
            "price": "Rs 1,90,000"
      },
      {
            "id": 9,
            "date": "12-Nov-2021",
            "review": "Review 1045",
            "title": "Tata Safari Facelift",
            "type": "SUV",
            "image": "car9.jpg",
            "mileage": "48000 KM",
            "location": "Ahmedabad",
            "engine": "2.8 Diesel",
            "transmission": "Manual",
            "price": "Rs 1,60,000"
      },
      {
            "id": 10,
            "date": "20-Dec-2021",
            "review": "Review 1150",
            "title": "Tata Nexon",
            "type": "SUV",
            "image": "car10.jpg",
            "mileage": "32000 KM",
            "location": "Surat",
            "engine": "1.6 Petrol",
            "transmission": "Automatic",
            "price": "Rs 1,30,000"
      },
      {
            "id": 11,
            "date": "15-Jan-2022",
            "review": "Review 1255",
            "title": "Hyundai Creta",
            "type": "Sedan",
            "image": "car11.webp",
            "mileage": "36000 KM",
            "location": "Lucknow",
            "engine": "2.0 Diesel",
            "transmission": "Manual",
            "price": "Rs 1,20,000"
      },
      {
            "id": 12,
            "date": "10-Feb-2022",
            "review": "Review 1360",
            "title": "Mahindra XUV 700",
            "type": "SUV",
            "image": "car12.jpg",
            "mileage": "58000 KM",
            "location": "Chandigarh",
            "engine": "2.5 Petrol",
            "transmission": "Automatic",
            "price": "Rs 1,80,000"
      }
];

let uniquecategory = () => {
      return Array.from(new Set(data.map(item=>item.type)));
  }

export{
      data,
      uniquecategory
}


let Cards = () => {
      let {selectedsubcategory} = useContext(ProductContext);
      let {dataState} = useContext(ProductContext);
      let {selectedcategory} = useContext(ProductContext)
      let {searchQuery} = useContext(ProductContext);

      const filteredByCategory = selectedcategory.length === 0 || selectedcategory.includes("All")
            ? dataState
            : dataState.filter(item => selectedcategory.includes(item.type));

      // Step 2: Filter by selected subcategories
      const filteredBySubCategory = selectedsubcategory.length === 0 || selectedsubcategory.includes("All")
            ? filteredByCategory
            : filteredByCategory.filter(item => selectedsubcategory.includes(item.location));


      const filteredBySubCategorySearch = filteredBySubCategory.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return (
            <div className="card-container p-2 p-lg-0 pt-lg-2 ps-lg-1 overflow-y-scroll" style={{ maxHeight: "100%" }}>
                  {filteredBySubCategorySearch.map(item =>
                        <Infocard data={item} />
                  )}
                  <hr className="m-0 p-0"></hr>
                  <p className="d-block m-0"></p>
            </div>
      )
}

export default Cards;