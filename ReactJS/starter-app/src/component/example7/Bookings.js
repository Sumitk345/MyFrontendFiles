import Agent from "./Agent";
import Cars from "./Cars";


let Bookings = (props) => {
    return (
        <>
            <div className="row" style={{minHeight:"100vh"}}>
                <div className="col-lg-6">
                    <Cars carsData={props.carsData} selectCar={props.selectCar} myAgent={props.myAgent}/>
                </div>
                <div className="col-lg-6">
                    <Agent agents={props.agents} selectAgent={props.selectAgent} myCar={props.myCar}/>
                </div>
            </div>
        </>
    )
}

export default Bookings;