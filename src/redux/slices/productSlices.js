import { createSlice } from '@reduxjs/toolkit'
import products from '../../fakeData/products.json'

const productSlice = createSlice({
    name : 'product',
    initialState : {
        productList : products,
        cartList : []
    },

    reducers: {
        addToCart: (state , { payload }) => {
         state.cartList.push(payload)
        },
        removeFromCart: (state , { payload }) => {
          state.cartList = state.cartList.filter(product => product.id !== payload)
        }
      }
    })
    
    export const { addToCart , removeFromCart } = productSlice.actions
    
    export default productSlice.reducer;
