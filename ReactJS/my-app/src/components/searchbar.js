let Searchbar = () => {
      return (
            <section id="searchbar" style={{backgroundColor: "rgba(125, 125, 125, 0.603)",maxWidth: "100%;"}} class=" rounded-2 m-3">
                  <nav class="navbar">
                        <div class="searchbar-body d-flex">
                              <div class="btn-group">
                                    <button type="button" class="btn me-2 dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static"
                                          aria-expanded="false">
                                          <i class="fa-duotone fa-solid fa-filter top-logos " style={{faSecondaryColor: "#000000"}}></i>Select
                                          Category
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-lg-end">
                                          <li><button class="dropdown-item" type="button">Action</button></li>
                                          <li><button class="dropdown-item" type="button">Another action</button></li>
                                          <li><button class="dropdown-item" type="button">Something else here</button></li>
                                    </ul>
                              </div>
                              <form class="d-flex" role="search">
                                    <input class="form-control me-2 " type="search" placeholder="Company/Modal" aria-label="Search" />
                                    <button type="button" class="btn btn-dark  me-2  ">Search</button>
                              </form>
                        </div>
                  </nav>
            </section>
      )
}

export default Searchbar;