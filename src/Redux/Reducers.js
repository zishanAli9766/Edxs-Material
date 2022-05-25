const initialState = 0;

const Reducers = (state = initialState,action)=>{
    switch (action.type) {
        case "ICREM":return state +action.payload;
        case "DECRE": return state - action.payload;
        case "RESET": return (state = 0);;
    
    
        default: return state
            
    }
}

export default Reducers;