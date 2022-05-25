export const Increment = (actionType,num)=>{
    return{
        type : actionType,
        payload:num,
    }
}
export const Decrement = (actionType,num) =>{
    return{
        type : actionType,
        payload:num,
    }
}
export const Reset = (actionType) =>{
    return{
        type : actionType,
    }
}