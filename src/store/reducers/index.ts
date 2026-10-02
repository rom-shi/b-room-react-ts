import { combineReducers } from 'redux';
import bookSlice from './book';
import cartSlice from './cart';
import requestSlice from './request';
import userSlice from './user';

const rootReducer = combineReducers({
  bookSlice,
  cartSlice,
  requestSlice,
  userSlice,
});

export default rootReducer;
