import FoodComponent from "./Food";
import HeaderComponent from "./Header";
import ReceipeCompoent from "./Reciepe";


let Example9Home = () => {
    return (
        <>
        <HeaderComponent />
            <div className="row">
                <div className="col-lg-2">
                    <FoodComponent />
                </div>

                <div className="col-lg-10">
                    <ReceipeCompoent />
                </div>
            </div>
        </>
    )
}

export default Example9Home;