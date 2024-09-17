import { useContext } from "react";
import AppContext from "../AppContext";




let SecondChild1 = () => {

    let {message} = useContext(AppContext);

    return (
        <>
            <p>SecondChild1 Component</p>
            <p>message from Context Provider = {message}</p>
        </>
    )
}

export default SecondChild1;