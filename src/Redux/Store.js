// import {createStore} from 'redux'
import { createStore } from 'redux';
import MainReducers from './MainReduers';
// import Reducers from './Reducers';

const Store = createStore(MainReducers)

export default Store;