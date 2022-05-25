// import logo from './logo.svg';
// import './App.css';
import ComposedCharts from './Chartsin/ComposedChart';
import BarChart from './Chartsin/ComposedChart';
import LinesChart from './Chartsin/LinesChart';
import SlineCharts from './Chartsin/SlineCharts';
import Classcomp from './Day2';
import Fiires from './FireBase/Fiires';
import GoogleLoginse from './Google/GoogleLoginse';
import SimpleMap from './Google/SimpleMap';
import FaceBooks from './Integration/FaceBooks';
import Twitter from './Integration/Twitter';
import LifeCycle from './LifeCycle';
import {messaging} from './FireBase/Notif'
import { useEffect } from 'react';
import RealTimedb from './FireBase/RealTimedb';
import { useDispatch, useSelector } from 'react-redux';
import { decre, incre, reset } from './Redux/Action';
import { Decrement, Increment, Reset } from './Redux/ReduxS/Action';
import { DECREMENT, ICREMENT, RESET } from './Redux/ReduxS/Actiontype';
import axios from 'axios';



function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state?.Reducers);
  const State = useSelector((state) => state?.Reducer);

  useEffect(()=>{
    wordsFetchData();
  },[])

 function wordsFetchData()  {
  
    axios.get("https://fakestoreapi.com/products/1").then((res)=>{
      console.log(res.data);
    }).catch((err) => console.log("err",err))
 }


  return (
    <div className="App">
      {/* <h2>HI</h2> */}
      {/* <Classcomp/> */}
      {/* <LifeCycle/> */}
      {/* <h1>Integration Login</h1>
      <div>
        <GoogleLoginse />
      </div>
      <div>
        <Twitter />
      </div>
      <div>
        <FaceBooks />
      </div> */}
      {/* <SimpleMap /> */}
      {/* <h2>Charts </h2> 
      /* <LinesChart />
    <SlineCharts /> */}
      {/* <ComposedCharts /> */}
      {/* <h1>FireBase Auth</h1>
        <Fiires /> */}
        {/* <h1>RealTimeDB</h1>
        <RealTimedb /> */}
        {/* <h1>ReduxCounter</h1>
        <button onClick={()=>dispatch(incre(3))}>+</button>
      <h2>{state}</h2>
      <button onClick={()=>dispatch(decre(4))}>-</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <h1>2nd Type Couter</h1>
      <button onClick={()=>dispatch(Increment(ICREMENT,10))}>Incre</button>
      <h1>{State}</h1>
      <button onClick={()=>dispatch(Decrement(DECREMENT,5))}>Decre</button>
      <button onClick={()=>dispatch(Reset(RESET))}>Reset</button> */}
      <h1>Redux Api</h1>

    </div>
  );
}

export default App;
