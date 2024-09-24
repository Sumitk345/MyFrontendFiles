import { combineReducers , createStore } from "redux"

const initialState = {}

let changestate = (state = initialState , action) =>{
    const  key  = action.payload;

    if (action.type==="convertcapital") {
      return {...state,[key]:state[key].toUpperCase()}
      // return {...state,valueofa:state.valueofa.toUpperCase()}
      
    } else if(action.type==="conversmall"){
      return {...state,[key]:state[key].toLocaleLowerCase()}
      // return {...state,valueofa:state.valueofa.toLocaleLowerCase()}
    }
    return state;
} 

for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(97 + i);
  initialState[`valueof${letter}`] = letter;  
}
console.log(initialState);


let getinitialState =(state = initialState )=>{
    return state
}




let store = createStore(combineReducers({
      alphabet: changestate,
      initialState:getinitialState
}))

export default store;