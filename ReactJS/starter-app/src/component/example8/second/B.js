import SecondChild1 from "./P";
import SecondChild2 from "./Q";



let Second = () => {
    return (
        <>
            <div className="border border-2 border-pimrary">
                <p className="fw-bold text-danger">Second Component</p>
                <div className="row">
                    <div className="col-lg-6">
                        <SecondChild1 />
                    </div>

                    <div className="col-lg-6">
                        <SecondChild2 />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Second;