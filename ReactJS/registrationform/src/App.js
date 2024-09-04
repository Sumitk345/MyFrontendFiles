import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  let [firstname, storeFirstname] = useState("");
  let [lastname, storeLastname] = useState("");
  let [middlename, storeMiddlename] = useState("");
  let [location, storeLocation] = useState("");
  let [gender, storeGender] = useState("");
  let [state, storeState] = useState("");
  let [contact, storeContact] = useState("");
  let [email, storeEmail] = useState("");
  let [qualification, storeQualification] = useState("");

  let readFirstName = (event) => {
    storeFirstname(event.target.value);
  };

  let readLastName = (event) => {
    storeLastname(event.target.value);
  };

  let readMiddleName = (event) => {
    storeMiddlename(event.target.value);
  };

  let readLocation = (event) => {
    storeLocation(event.target.value);
  };



  let readGender = (event) => {
    storeGender(event.target.value);
  };

  let readState = (event) => {
    storeState(event.target.value);
  };

  let readContact = (event) => {
    storeContact(event.target.value);
  };

  let readEmail = (event) => {
    storeEmail(event.target.value);
  };

  let readQualification = (event) => {
    storeQualification(event.target.value);
  };

  console.log(firstname);

  let submit = (event) => {
    let person = {};
    person.fullname = firstname+" " + middlename+" " + lastname
    person.location = location;
    person.gender = gender;
    person.state = state;
    person.contact = contact;
    person.email = email;
    person.qualification = qualification;

    const myJSON = JSON.stringify(person, null, 8);
    const formattedJSON = myJSON.replace(/\n/g, "<br>").replace(/  /g, "&nbsp;&nbsp;");
    document.querySelector(".output-para").innerHTML = formattedJSON;
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">

                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Student registration form</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example1m" className="form-control form-control-lg" required  onChange={readFirstName} />
                          <label className="form-label" htmlFor="form3Example1m">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example1n" className="form-control form-control-lg" required  onChange={readMiddleName} />
                          <label className="form-label" htmlFor="form3Example1n">Middle name</label>
                        </div>
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example8" className="form-control form-control-lg" required  onChange={readLastName} />
                      <label className="form-label" htmlFor="form3Example8">Last name</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example9" className="form-control form-control-lg" required  onChange={readLocation} />
                      <label className="form-label" htmlFor="form3Example9">Address</label>
                    </div>

                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 className="mb-0 me-4">Gender: </h6>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" required  id="femaleGender" value="Female" onChange={readGender} />
                        <label className="form-check-label" htmlFor="femaleGender">Female</label>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" required  id="maleGender" value="Male" onChange={readGender} />
                        <label className="form-check-label" htmlFor="maleGender">Male</label>
                      </div>

                      <div className="form-check form-check-inline mb-0">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" required  id="otherGender" value="Other" onChange={readGender} />
                        <label className="form-check-label" htmlFor="otherGender">Other</label>
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example9" className="form-control form-control-lg" required onChange={readState} />
                      <label className="form-label" htmlFor="form3Example9">State</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example90" className="form-control form-control-lg" required onChange={readContact} />
                      <label className="form-label" htmlFor="form3Example90">Contact</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example99" className="form-control form-control-lg" required onChange={readEmail} />
                      <label className="form-label" htmlFor="form3Example99">Email ID</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example97" className="form-control form-control-lg" required onChange={readQualification} />
                      <label className="form-label" htmlFor="form3Example97">Qualification</label>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2" onClick={submit}>Submit form</button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 d-xl-block">
                  <div className="img-fluid" style={{ minHeight: "100%", borderTopLeftRadius: ".25rem", margin: "5px" }}>
                    <p className='output-para'></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
