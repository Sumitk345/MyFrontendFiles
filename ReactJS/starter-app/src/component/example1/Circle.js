

let Circle = () => {
    return (
        <div>
            <div className="row align-items-center border border-2 border-success">
                <div className="col-lg-2 border border-2 border-danger p-5 " style={{ backgroundColor:"blue",minWidth:"25%"}}>
                    <div className="justify-content-center d-flex">
                        <i class="fa-regular fa-circle" style={{fontSize:"80px", color:"white"}}></i>
                    </div>
                </div>

                <div className="col-lg-8">
                    <h4 className="ms-2 mb-3 text-primary">Area of Circle</h4>
                    <input type="text" className="form-control m-2" placeholder="radius" />
                    <button className="btn btn-primary m-2">Calcualte Area</button>
                </div>
            </div>
        </div>
    )
}

export default Circle;