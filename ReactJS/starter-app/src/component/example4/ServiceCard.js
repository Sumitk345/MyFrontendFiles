

let ServiceCard = (props) => {
    return (
        <>
            <div className="card m-3" style={{ minWidth: "300px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.data.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.data.title}</h5>
                            <p className="card-text text-truncate">{props.data.description}</p>
                            <a href="#">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;