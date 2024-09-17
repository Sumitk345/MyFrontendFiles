import {retriveUniqueCategories} from "./mockdata";


let FoodComponent = () => {
    return (
        <>
            <div className="m-2 border border-secondary">
                {retriveUniqueCategories().map(item=>
                    <div className="m-1">
                        <input type="checkbox" id={item} className="form-check-input" />
                        <label className="mx-2" htmlFor={item}>{item}</label>
                    </div>    
                )}
            </div>
        </>
    )
}

export default FoodComponent;