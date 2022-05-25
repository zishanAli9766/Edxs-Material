export const incre = (num)=>{
    return{
        type : "ICREM",
    payload:num,
    }
}
export const decre = (num) =>{
    return{
        type: "DECRE",
        payload:num,
    }
}
export const reset = () =>{
    return{
        type: "RESET",
       
    }
}