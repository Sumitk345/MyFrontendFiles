let Cars = (props) => {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CAR NAME</th>
                        <th>COST PER KM</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {props.carsData.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.carname}</td>
                            <td>{item.costPerKm}</td>
                            <td>{item.status}</td>
                            <td>
                                <button className="btn btn-primary btn-sm mx-0" 
                                        disabled={item.status === "NOT AVAILABLE" || props.myAgent != null}
                                        onClick={() => props.selectCar(item)}>select</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Cars;
