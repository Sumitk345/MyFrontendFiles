import { useState } from "react";
import AppContext from "./AppContext";
import First from "./first/A";
import Second from "./second/B";


let Example8Home = () => {
    let [message, setMessage] = useState("Hello Deesha Computer");
    let [firstname, setFirstname] = useState("smith devid");
    return (
        <>
            <AppContext.Provider value={{message, firstname, setFirstname}}>
                <div className="container p-2">
                    <div className="m-2">
                        <First />
                    </div>

                    <div className="m-2">
                        <Second />
                    </div>
                </div>
            </AppContext.Provider>


        </>
    )
}

export default Example8Home;