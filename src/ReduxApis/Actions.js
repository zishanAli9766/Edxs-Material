import axios from "axios";
import { useDispatch } from "react-redux";
export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const requestUsers = () => ({
  type: REQUEST_USERS
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  payload: users
});



// const dispatch = useDispatch();
export const fetchProductDetail = async (id) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/1`).then((res)=>{dispatch(receiveUsers(RECEIVE_USERS,res.data))})
    .catch((err) => {
      console.log("Err: ", err);
    });
  dispatch(receiveUsers(RECEIVE_USERS,response.data));
};


// import axios from "axios";

// export function loadColor(){
//     return(dispatch)=>{
//         return axios.get("http://www.colr.org/json/color/random").then((response)=>{
//             dispatch(changeColor("#"+response.data.new_color));
//         })
//     }
// }

// export function changeColor(color){
//     return{
//         type:"CHANGE_COLOR",
//         color:color
//     }
// }
// export function loadColor(){
//     return(dispatch)=>{
//         return axios.get("https://fakestoreapi.com/products/category/jewelery").then((response)=>{
//             dispatch(changeColor("#"+response.data));
//         })
//     }
// }

// export function changeColor(color){
//     return{
//         type:"CHANGE_COLOR",
//         payload:color
//     }
// }