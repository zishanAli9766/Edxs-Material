import { RECEIVE_USERS } from "./Actions";

let defaultState={
    color:[]
}

const Reducerses=(state = defaultState,action)=>{
switch (action.type) {
    case RECEIVE_USERS :return{
        ...state,
        color:action.user
    }

    default: return state
       
}

}

export default Reducerses;