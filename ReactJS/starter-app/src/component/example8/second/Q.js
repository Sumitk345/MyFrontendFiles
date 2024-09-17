import { useContext } from "react";
import AppContext from "../AppContext";






let SecondChild2 = () => {

    let {message, firstname} = useContext(AppContext);

    return (
        <>
            <p>SecondChild2 Component</p>
            <p>message from Context Provider = {message}</p>
            <p>firstname from x = {firstname}</p>
        </>
    )
}

export default SecondChild2;