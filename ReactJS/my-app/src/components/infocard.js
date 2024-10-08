

const Infocard = ({ data }) => {
      return (
        <div className="card flex-grow-1">
          <div className="card-body border d-flex  flex-column">
            <div className="d-flex justify-content-between">
            <span className="">{data.date}</span>
            <span className="review">{data.review}</span>
            </div>
            <span className="fw-light card-title py-2">
              {data.title}({data.type})
            </span>
            <img
              src={`${process.env.PUBLIC_URL}/images/${data.image}`}
              className="card-img"
              alt="Car Image"
            />
            
            <div className="blocks">
              <span>Mileage</span>
              <span>{data.mileage}</span>
            </div>
            <div className="blocks">
              <span>Location</span>
              <span>{data.location}</span>
            </div>
            <div className="blocks">
              <span>Engine</span>
              <span>{data.engine}</span>
            </div>
            <div className="blocks">
              <span>Transmission</span>
              <span>{data.transmission}</span>
            </div>
            <div className="blocks price ">
              <span>{data.price}</span>
            </div>
            <div className="blocks">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Infocard;
    