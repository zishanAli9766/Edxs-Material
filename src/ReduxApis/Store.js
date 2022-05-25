
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducerses from './Reducerses';

const Store = createStore(Reducerses,applyMiddleware(thunk))

export default Store;
