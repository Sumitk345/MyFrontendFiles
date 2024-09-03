import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <Header />
    </div>
  );
}

let Header = () => {
  return (
    <nav className="navbar bg-success py-3 ">
      <div className="container-fluid ">
        <a className="navbar-brand fw-semibold fs-2 text-white">Stanley's Pharmacy</a>
        <form className="d-flex" role="search">
        <button type="button" className="btn btn-outline-warning me-2 text-white fw-semibold">Login</button>
        <button type="button" className="btn btn-outline-light fw-semibold">Sign Up</button>
        </form>
      </div>
    </nav>
  );
}

export default App;
