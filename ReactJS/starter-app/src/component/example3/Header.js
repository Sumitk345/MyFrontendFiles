
let Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg " data-bs-theme="dark" style={{backgroundColor:"darkorange"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i class="fa-solid fa-stethoscope" style={{"color": "#00941e"}}></i> Practo Healthcare</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-arrows-spin"></i> Skin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i class="fa-brands fa-gratipay"></i> Heart</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i class="fa-solid fa-database"></i> Hair</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i class="fa-solid fa-droplet"></i> Blood</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-sm btn-light fw-bold">login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;