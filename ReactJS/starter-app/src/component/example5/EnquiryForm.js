import { useState } from "react";


let EnquiryForm = () => {
    

    let [firstname, storeFirstName] = useState("");
    let [lastname, storeLastName] = useState("");
    let [course, storeCourse] = useState("");
    let [branch, storeeBrach] = useState("");
    let [college, storeCollege] = useState("");

    let readFirstName = (event) => {
        //x=event.target.value;
        //y = event.target.value;  react vdom will not notify real dom about the change
        // storeY(event.target.value); //react will imidiately effect real dom

        storeFirstName(event.target.value);

    }

    let readLastName = (event) => {
        storeLastName(event.target.value);
    }
    
    let enquiryButtonClick = (event) => {
      
    }

    return (
        <>
            <div className="d-flex justify-content-center p-4">
                <div className="card" style={{ width: "600px" }}>
                    <div className="card-header">
                        <h3 className="fw-light text-uppercase fs-4">Enquiry Form</h3>
                    </div>

                    <div className="card-body">
                        <div className="me-4">
                            <input type="text" className="form-control text-center m-3 text-center  fw-light text-capitalize fs-4 " placeholder="first name" name="firstname" onChange={readFirstName}/>

                            <input type="text" className="form-control text-center m-3 text-center  fw-light text-capitalize fs-4 " placeholder="last name" name="lastname" onChange={readLastName}/>

                            <input type="text" className="form-control text-center m-3 text-center  fw-light text-capitalize fs-4 " placeholder="course" name="course" />

                            <input type="text" className="form-control text-center m-3 text-center  fw-light text-capitalize fs-4 " placeholder="branch" name="branch" />

                            <input type="text" className="form-control text-center m-3 text-center  fw-light text-capitalize fs-4 " placeholder="college" name="college" />
                        </div>
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-primary float-end m-3" onClick={enquiryButtonClick}>enquire now!</button>
                    </div>
                </div>
            </div>

            <p className="text-center text-uppercase fw-bold fs-4 ">Firstname = {firstname}</p>
            <p className="text-center text-uppercase fw-bold fs-4">Lastnmae = {lastname}</p>
        </>
    )
}

export default EnquiryForm;