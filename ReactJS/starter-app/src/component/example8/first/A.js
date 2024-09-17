import FirstChild1 from "./X";
import FirstChild2 from "./Y";


let First = () => {
    return (
        <>
            <div className="border border-2 border-pimrary">
                <p className="fw-bold text-danger">First Component</p>
                <div className="row">
                    <div className="col-lg-6">
                        <FirstChild1 />
                    </div>

                    <div className="col-lg-6">
                        <FirstChild2 />
                    </div>
                </div>
            </div>

        </>
    )
}

export default First;