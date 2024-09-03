let Header = () =>{
      return(
            <section id="header">
    <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "rgba(125, 125, 125, 0.603)" }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><button type="button" class="btn btn-danger"><i
              class="fa-solid fa-car fs-2 me-3 top-logos" style={{"color": "#ffffff;"}}></i>AUTO WORLD</button></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><i
                  class="fa-duotone fa-solid fa-gift me-2 top-logos"></i>Offers</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" href="#"><i class="fa-duotone fa-solid fa-headset me-2 top-logos"></i>Contact
                Us</a>

            </li>
          </ul>
          <form class="d-flex" role="search">
            <button type="button" class="btn btn-dark">Signup</button>
          </form>
        </div>
      </div>
    </nav>
  </section>
      )
}

export default Header;