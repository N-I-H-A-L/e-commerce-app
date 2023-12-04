import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.totalPrice += action.payload.price*action.payload.quantity;
        },
        clearCart: ()=>{
            return initialState;
        }
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;