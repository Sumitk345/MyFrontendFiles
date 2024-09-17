import { useContext } from "react";
import AppContext from "../AppContext";




let FirstChild1 = () => {
    let {message, setFirstname}= useContext(AppContext);

    let readTextBoxData = (event) => {
        setFirstname(event.target.value);
    }

    return (
        <>
            <p>FirstChild1 Component</p>
            <p>message from context provider = {message}</p>
            <hr/>

            <input type="text" onChange={readTextBoxData} />
        </>
    )
}

export default FirstChild1;