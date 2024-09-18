let Header = () => {
      return (
        <nav className="navbar bg-success p-5 p-md-4 p-lg-3">
            <div className="container-fluid">
                <a className="navbar-brand fs-1 fw-bold text-white tracking-wider"><i class="fa-regular fa-hospital fs-1" style={{"color": "#ffffff"}}><span className="px-2"></span></i>Stanley's Pharmacy</a>
                <form className="d-flex" role="search">
                    <div className="d-flex  gap-2">
                        <button type="button" className="btn btn-outline-light">Sign Up</button>
                        <button type="button" className="btn btn-outline-light">Login</button>
                    </div>
                </form>
            </div>
        </nav>
      );
    }

export default Header;