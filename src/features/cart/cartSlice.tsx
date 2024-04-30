import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems.js';

// define an interface for cart state
interface CartState {
    items: {
        id: string;
        name: string;
        price: number;
        thumbnail: string;
        quantity: number
    }[];
    totalItems: number;
}

// define the initial state
const initialState: CartState = {
    items: cartItems,
    totalItems: 10,
};
// create a slice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

export default cartSlice.reducer;
