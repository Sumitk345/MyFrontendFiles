import Header from "../Index/header";

let Signup = () => {
      return (
            <>
                  {/* <Header /> */}
                  <div className="container d-flex justify-content-center align-content-center m-auto row g-sm-4" style={{ "height": "calc(100vh - 76.86px)" }}>
                        <div className="container border border-2 p-6 m-sm-3" style={{ maxWidth: "500px", maxHeight: "fit-content" }}>
                              <form className=" d-flex flex-column gap-2 ">
                                    <div class="row mb-4">
                                          <div class="col login d-flex flex-column">
                                                <div data-mdb-input-init class="form-outline">
                                                      <input type="text" id="form6Example1" class="form-control" required />
                                                      <label class="form-label" for="form6Example1">First name</label>
                                                </div>
                                          </div>
                                          <div class="col login">
                                                <div data-mdb-input-init class="form-outline">
                                                      <input type="text" id="form6Example2" class="form-control" required />
                                                      <label class="form-label" for="form6Example2">Last name</label>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="login">
                                          <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="text" id="form6Example3" class="form-control" required />
                                                <label class="form-label" for="form6Example3">Company name</label>
                                          </div>
                                    </div>

                                    <div className="login">
                                          <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="text" id="form6Example3" class="form-control" required />
                                                <label class="form-label" for="form6Example3">Address</label>
                                          </div>
                                    </div>

                                    <div className="login">
                                          <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="text" id="form6Example3" class="form-control" required />
                                                <label class="form-label" for="form6Example3">Email</label>
                                          </div>
                                    </div>

                                    <div className="login">
                                          <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="text" id="form6Example3" class="form-control" required />
                                                <label class="form-label" for="form6Example3">Phone</label>
                                          </div>
                                    </div>

                                    <div className="login">
                                          <div data-mdb-input-init class="form-outline mb-4">
                                                <textarea class="form-control" id="form6Example7" rows="4" required></textarea>
                                                <label class="form-label" for="form6Example3">Additional information</label>
                                          </div>
                                    </div>


                                    <div class="form-check d-flex justify-content-center mb-4">
                                          <input
                                                class="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form6Example8"
                                                checked
                                          />
                                          <label class="form-check-label" for="form6Example8"> Create an account? </label>
                                    </div>

                                    <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Sign Up</button>
                              </form>
                        </div>
                  </div>
            </>
      )
}

export default Signup;