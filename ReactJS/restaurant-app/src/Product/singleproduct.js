let Singleproduct = ({ singlemedicinecard }) => {
  return (
    <div className="card flex-grow-1">
      <img src={singlemedicinecard.src}
        className="card-img-top" alt="Fissure in Sandstone" />
      <p className="card-text text-center mb-2 fw-bold fs-4 text-success">{singlemedicinecard.receipename}</p><span className="text-center">({singlemedicinecard.foodcategory})</span>

      <div className="card-body position-relative border border-2">
        <div className="container d-flex flex-column gap-3  justify-content-center">

          <p className="card-text text-center mb-2 fw-bold fs-4 text-success">{singlemedicinecard.details.cost}</p>
          <div className="container d-flex  gap-2 mb-11 text-center align-content-center justify-content-center">
            <span className="m-auto">Qtys</span>
            <input className="form-control mr-sm-2" type="number" placeholder="Quantity"
              aria-label="Search" />
          </div>
          <a href="#!" className="btn btn-primary position-relative bottom-0 mt-4 mb-2" data-mdb-ripple-init>Add to Cart</a>
          <a href="#!" className="g-0 ms-auto" data-mdb-ripple-init>Read More</a>
        </div>


      </div>
    </div>
  );
}

export default Singleproduct;