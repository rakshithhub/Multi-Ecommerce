import { configureStore } from '@reduxjs/toolkit';
import ecomSlice from '../features/ecomSlice';
import productSlice from '../features/productSlice';
import addProductSlice from '../features/addProductSlice';


export const store = configureStore({
  reducer: {
    ecomm: ecomSlice,
    product: productSlice,
    addProduct: addProductSlice,
  },
});
