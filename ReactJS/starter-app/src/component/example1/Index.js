import Circle from "./Circle";
import Header from "./Header";
import Rectangle from "./Rectangle";
import Square from "./Square";
import Triangle from "./Triangle";


let Example1Home = () => {
    return (
        <div>
            <Header />
            <hr/>
            <div className="container ms-5" style={{paddingTop:"100px"}}>
                <div className="row">
                    <div className="col-lg-6 m-0">
                            <Circle />
                    </div>
                    <div className="col-lg-6">
                            <Triangle />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                            <Square />
                    </div>
                    <div className="col-lg-6">
                            <Rectangle />
                    </div>
                </div>
            </div>

            <img src="/images/cartoon1.jpg" className="p-3 px-5" />
        </div>
    )
}

export default Example1Home;