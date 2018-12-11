import { combineReducers } from 'redux';
import productsReducer from './products';

export default combineReducers({
    cart_products: productsReducer,
});