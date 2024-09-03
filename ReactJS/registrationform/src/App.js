import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {

  let [password, storePassword] = useState("");


  let readFirstName = (event) => {
    // password = event.target.value;
    storePassword(event.target.value);
  }
  console.log(password);


  let submit = (event) => {
    alert(password);
  }
  return (
    <section classNameName="h-100 bg-dark">
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
                          <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Example1m" onChange={readFirstName}>First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Example1n">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Example1m1">Mother's name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Example1n1">Father's name</label>
                        </div>
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example8" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example8">Address</label>
                    </div>

                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                      <h6 className="mb-0 me-4">Gender: </h6>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                          value="option1" />
                        <label className="form-check-label" for="femaleGender">Female</label>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                          value="option2" />
                        <label className="form-check-label" for="maleGender">Male</label>
                      </div>

                      <div className="form-check form-check-inline mb-0">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                          value="option3" />
                        <label className="form-check-label" for="otherGender">Other</label>
                      </div>

                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <select data-mdb-select-init>
                          <option value="1">State</option>
                          <option value="2">Option 1</option>
                          <option value="3">Option 2</option>
                          <option value="4">Option 3</option>
                        </select>

                      </div>
                      <div className="col-md-6 mb-4">

                        <select data-mdb-select-init>
                          <option value="1">City</option>
                          <option value="2">Option 1</option>
                          <option value="3">Option 2</option>
                          <option value="4">Option 3</option>
                        </select>

                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example9" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example9">DOB</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example90" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example90">Pincode</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example99" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example99">Course</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example97" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example97">Email ID</label>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2" onClick={submit}>Submit form</button>
                    </div>

                  </div>
                </div>
                <div className="col-xl-6 d-xl-block">
                  <div className="img-fluid" style={{ borderTopLeftRadius: ".25rem", border: "2px solid black" }}>
                    <p></p>
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
