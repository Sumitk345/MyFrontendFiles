let Header = () => {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "rgba(125, 125, 125, 0.603)" }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold space-right2" href="#"><span className="fs-2">A</span>UTO WORLD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><i
                  className="fa-duotone fa-solid fa-gift me-2 top-logos"></i>Offers</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#"><i className="fa-duotone fa-solid fa-headset me-2 top-logos"></i>Contact
                  Us</a>

              </li>
            </ul>
            <form className="d-flex" role="search">
              <button type="button" className="btn btn-dark">Signup</button>
            </form>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header;