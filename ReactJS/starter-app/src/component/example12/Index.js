import { Provider } from "react-redux";
import CounterApp from "./CounterApp";
import store from "./Store";


let Example12Home = () => {
    return (
        <>
            {/* step3: Create Provider */}
            <Provider store={store}>        {/* nestring components inside Prodiver will become children (Consumer) */}
                <CounterApp />          
            </Provider>  
        </>
    )
}

export default Example12Home;