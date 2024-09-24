
import React from 'react'

const Ingredient = ({ id , Ingredient }) => {
      return (
            <div className=' position-absolute text-white' style={{zIndex:"10", width:"100%" , left:0 , borderRadius:"10px" ,backgroundColor:"#3A6D8C"}}>
                  <div className=" container-fluid collapse  flex-column border border-2  flex-lg-grow-1 pt-lg-0"
                        id={id}>
                        {Ingredient.map(item =>
                              <>
                                    <div className="d-flex justify-content-between">
                                          <span className="">{item.title}</span>
                                          <span className="text-end">{item.quantity}</span>
                                    </div>
                              </>
                        )}
                        {/* <p className="">{JSON.stringify(Ingredient)}</p> */}
                  </div>

            </div>
      )
}

export default Ingredient
