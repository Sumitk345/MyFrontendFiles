import { useDispatch, useSelector } from "react-redux";


let CounterApp = () => {
    // Step4: Consume State from centralized redux store
    let state = useSelector(state=>state.count);
    let dispatch = useDispatch();

    let increaseCount = () => {
        dispatch({type:"INC_COUNT", payload:5})
    }

    let decreaseCount = () => {
        dispatch({type:"DEC_COUNT", payload:3})
    }

    return (
        <>
            <div className="d-flex justify-content-center m-4">
                <div className="card m-3" style={{ width: "300px" }}>
                    <div className="card-body">
                        <h1 className="text-primary text-center">{JSON.stringify(state)}</h1>
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-success col-6" onClick={increaseCount}>Add</button>
                        <button className="btn btn-danger col-6" onClick={decreaseCount}>Sub</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterApp;