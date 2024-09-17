import { useContext } from "react";
import AppContext from "../AppContext";






let FirstChild2 = () => {

    let {message} = useContext(AppContext);

    return (
        <>
            <p>FirstChild2 Component</p>
            <p>message from Context Provider = {message}</p>
        </>
    )
}

export default FirstChild2;