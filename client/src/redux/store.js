import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import userReducer from "./userSlice.js";

// Combine the reducers
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
