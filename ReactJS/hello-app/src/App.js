import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageList />
    </div>
  );
}

export default App;

let Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <i className="fa-solid fa-plane-circle-check"></i> round trip</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">International Flights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Demestic Flights</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Lounge</a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-user-lock"></i> login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

let ImageList = () => {
  return (
    <div className="container-img g-0">
      <img src="./images/flight1.jpg" className="img-thumbnail" />
      <img src="./images/flight2.jpg" className="img-thumbnail" />
      <img src="./images/flight3.jpg" className="img-thumbnail" />
      <img src="./images/flight4.png" className="img-thumbnail" />
      <img src="./images/flight5.jpg" className="img-thumbnail" />
    </div>
  )
}