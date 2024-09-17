import Header from "../Index/header";

let Login = () => {
      return (
            <>
                  <Header />
                  <div className="container d-flex justify-content-center align-content-center m-auto row g-sm-4" style={{ "height": "calc(100vh - 76.86px)" }}>
                        <div className="container border border-2 p-6 m-sm-3" style={{ maxWidth: "500px" }}>
                              <form className="login d-flex flex-column gap-6 ">
                                    <h2 className="fw-bold text-primary pb-2 mb-0">Login</h2>
                                    <div data-mdb-input-init className="form-outline g-sm-0">
                                          <input type="text" id="form3Example1m" className="form-control form-control-lg" required />
                                          <label className="form-label" htmlFor="form3Example1m">Email address
                                          </label>
                                    </div>
                                    <div data-mdb-input-init className="form-outline">
                                          <input type="text" id="form3Example1m1" className="form-control form-control-lg" required />
                                          <label className="form-label" htmlFor="form3Example1m1">Password</label>
                                    </div>
                                    <div className="container-fluid d-flex justify-content-end g-0">
                                          <button data-mdb-ripple-init type="submit" class="btn btn-primary ">Login</button>
                                    </div>

                              </form>
                        </div>
                  </div>
            </>
      )
}

export default Login;