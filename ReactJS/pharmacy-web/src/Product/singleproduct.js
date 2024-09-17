let Singleproduct = ({ singlemedicinecard }) => {
  return (
    <div className="card flex-grow-1">
      <img src={singlemedicinecard.src}
        className="card-img-top" alt="Fissure in Sandstone" />
      <div className="card-body position-relative border border-2">
        <h5 className="card-title" style={{ minHeight: "70px", maxHeight: "70px" }}>{singlemedicinecard.Name}</h5>
        <div className="container d-flex gap-3  justify-content-center">
          <p className="card-text text-center mb-2 fw-bold fs-4 text-dark text-decoration-line-through">$19.45</p> <span className="card-text text-center mb-2 fw-bold fs-4 text-dark text-decoration-none">|</span>

          <p className="card-text text-center mb-2 fw-bold fs-4 text-success">{singlemedicinecard.price}</p>

        </div>
        <div className="container d-flex gap-2 mb-11 text-center align-content-center justify-content-center">
          <span className="m-auto">Qtys</span>
          <input className="form-control mr-sm-2" type="number" placeholder="Quantity"
            aria-label="Search" />
        <a href="#!" className="btn btn-primary position-absolute bottom-0 mt-4 mb-4 " data-mdb-ripple-init>Add to Cart</a>

        </div>
      </div>
    </div>
  );
}

export default Singleproduct;