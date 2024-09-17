import React from 'react';
import { useEffect } from "react";
import { useState } from 'react';
import { useRef } from 'react';

let Passenger = (props) => {
    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState(0);
    const [finalBill, setFinalBill] = useState(0);
    const passengerRef = useRef(null);

    useEffect(() => {
        if (props.myCar) {
            passengerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [props.myCar]);

    let calculateBill = () => {
        var str = props.myCar.costPerKm
        let ratePerKm = Number(str.split(" ")[1]);
        setFinalBill(distance * ratePerKm);
    };

    return (
        <div ref={passengerRef} className='mt-0'>
            <div className='container-fluid row'>
                <div className='col-lg-6'>
                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>SEAT NO:</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.passengerData.map(item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.seatNumber}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm mx-0"
                                            disabled={props.myCar === ""}
                                            onClick={() => props.selectPassenger(item)}>select</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='col-lg-6 border border-2'>
                    <div className='row gap-2 h-100 d-flex p-1'>
                        {/* Passenger Information */}
                        <div className='col-lg-5 border border-0 p-3 flex-grow-1'>
                            <h3>Passenger Information</h3>
                            <p><strong>Name:</strong> {props.MyPassenger.name}</p>
                            <p><strong>Email:</strong> {props.MyPassenger.email}</p>
                            <p><strong>Seat Number:</strong> {props.MyPassenger.seatNumber}</p>

                            <div className='mt-3'>
                                <h5>Enter Details</h5>
                                <div className='mb-2'>
                                    <label>Location: </label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Enter location"
                                    />
                                </div>
                                <div className='mb-2'>
                                    <label>Distance (km): </label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        value={distance}
                                        onChange={(e) => setDistance(e.target.value)}
                                        placeholder="Enter distance"
                                    />
                                </div>
                                <button className='btn btn-primary' onClick={calculateBill}>
                                    Calculate Bill
                                </button>

                                {finalBill > 0 && (
                                    <div className='mt-3'>
                                        <h5>Final Bill: ${finalBill}</h5>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Car Information */}
                        <div className='col-lg-6 border border-2 p-3'>
                            <h3>Car Information</h3>
                            <p><strong>Car Name:</strong> {props.myCar.carname}</p>
                            <p><strong>License Plate:</strong> {props.myCar.id}</p>
                            <p><strong>CostPerKm:</strong> {props.myCar.costPerKm}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Passenger;
