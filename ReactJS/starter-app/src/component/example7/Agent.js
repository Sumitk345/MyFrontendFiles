let Agent = (props) => {
    return (
        <>
            <div className="d-inline-flex justify-content-center flex-wrap" >
                {props.agents.map(item =>
                    <div key={item.id} className="card m-3 shadow" style={{ minWidth: "200px", height: "" }}>
                        <div className="d-flex justify-content-center my-3 mx-2">
                            <img src={item.imageUrl} style={{ borderRadius: "90px", width: "60px" }} />
                        </div>

                        <div className="card-body">
                            <p className="text-center">agent name : {item.username}</p>
                            <p className="text-center">rating : {item.rating}</p>
                            <div className="d-flex justify-content-center my-3 mx-2">
                                <button className="btn btn-sm btn-success" disabled={props.myCar != ""} onClick={() => props.selectAgent(item)}>select</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Agent;
