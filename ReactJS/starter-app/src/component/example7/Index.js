import { useState } from "react";
import Bookings from "./Bookings";
import Passenger from "./Passenger";
import { mockAgents, mockCars, mockPassengers } from "./mockdata";


let Example7Home = () => {
    let [carsData, storeCarsData] = useState(mockCars);
    let [agentsData, storeAgentsData] = useState(mockAgents);
    let [passengerData , storepassengerData] = useState(mockPassengers)

    let [myCar, selectCar] = useState("");
    let [myAgent, selectAgent] = useState(null);
    let [MyPassenger, selectPassenger] = useState("");

    return (
        <>
            {/* <div className="row">
                <div className="col-lg-6">
                    <pre>{JSON.stringify(myCar)}</pre>
                </div>
                <div className="col-lg-6">
                    <pre>{JSON.stringify(myAgent)}</pre>
                </div>
            </div> */}
            <Bookings carsData={mockCars} 
                      agents={mockAgents} 
                      selectCar={selectCar} 
                      selectAgent={selectAgent} 
                      myCar={myCar}
                      myAgent={myAgent}
                      />
            <Passenger myCar={myCar} MyPassenger={MyPassenger} selectPassenger={selectPassenger} passengerData={passengerData}/>
        </>
    )
}

export default Example7Home;