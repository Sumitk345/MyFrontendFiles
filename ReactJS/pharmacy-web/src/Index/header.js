import { Outlet, Link } from 'react-router-dom';

let Header = () => {
    return (
        <>
            <nav className="navbar bg-success p-5 p-md-4 p-lg-3">
                <div className="container-fluid">
                    <Link to="">
                    <a className="navbar-brand fs-1 fw-bold text-white tracking-wider"><i class="fa-regular fa-hospital fs-1" style={{ "color": "#ffffff" }}><span className="px-2"></span></i>Stanley's Pharmacy</a>
                    </Link>
                    <form className="d-flex mt-3 mt-lg-0" role="search">
                        <div className="d-flex  gap-lg-2 gap-3">
                            <Link to="/signup">
                                <button type="button" className="btn btn-outline-light ">Sign Up</button>
                            </Link>
                            <Link to="/login">
                                <button type="button" className="btn btn-outline-light">Login</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;