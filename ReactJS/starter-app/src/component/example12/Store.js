//step1: install following two redux libraries using npm
// npm install redux react-redux

import { combineReducers, createStore } from "redux";

const initialState = {
    value:140
};

//step2: Define reducer function
let countReducer = (state = initialState, action) => {

    if(action.type=="INC_COUNT")
    {
        return {...state, value:state.value+action.payload};
    }
    else if(action.type=="DEC_COUNT")
    {
        return {...state, value:state.value-action.payload};
    }

    return state;
}

//step3: Configure store
let store = createStore(combineReducers({
    count:countReducer
}))

export default store;



/*
    reducer
    ---------
        -> reducer is a common place for state change of all components
        -> make change in state matching action type. 
        -> action is argument object that contains "type" and "payload"
        -> type must be unique in entire reducer function to apply specific change in state
        -> payload is data carier from component to reducer function
        -> reducer function must return state
    
    createStore
    ------------
        -> now you configure centralized state manament tool called redux using createStore function
        -> consider you created more than one reducers, you can combine them using combineReducers() function
        -> following unique name pattern in store configuration will identify the right reducer
        -> you must export store



*/