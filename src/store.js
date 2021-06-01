import reducer from './counter/counter'
import {createStore} from 'redux';
const store = createStore(reducer);
export default store;

