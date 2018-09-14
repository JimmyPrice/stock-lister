import { combineReducers } from 'redux';
import StockReducer from './reducer-stock'

const rootReducer = combineReducers({
  stock : StockReducer
});

export default rootReducer;
