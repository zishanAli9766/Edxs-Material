import { ICREMENT,DECREMENT,RESET } from "./Actiontype";
const initialState = 0;

const Reducer = (state = initialState,action)=>{
    switch (action.type) {
        case ICREMENT:return state +action.payload;
        case DECREMENT: return state - action.payload;
        case RESET: return state = 0 ;
    
        default: return state
            
    }
}

export default Reducer;