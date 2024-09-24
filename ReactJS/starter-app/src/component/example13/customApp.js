import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CustomApp = () => {
      let mystate = useSelector(state => state.alphabet);
      let mylist = useSelector(state => state.initialState);
      let dispatch = useDispatch();


      console.log(mylist);

      let conversmall = (key) => {
            dispatch({ type: "conversmall", payload: key })
      }

      let convertcapital = (key) => {
            dispatch({ type: "convertcapital", payload: key })
      }

      return (
            <div>
                  <div className="d-flex flex-wrap flex-grow-1 m-4">
                        {Object.keys(mylist).map((key, index) => (
                              <div key={key} className="card m-3 flex-grow-1" style={{ width: "300px" }}>
                                    <div className="card-body">
                                          <h1 className="text-primary text-center">{mystate[key]}</h1>
                                    </div>
                                    <div className="card-footer">
                                          <button className="btn btn-success col-6" onClick={()=>conversmall(key)}>SMALL</button>
                                          <button className="btn btn-danger col-6" onClick={()=>convertcapital(key)}>CAPITAL</button>
                                    </div>
                              </div>
                        ))}

                  </div>
            </div>
      )
}

export default CustomApp;
