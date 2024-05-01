import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../data/cartItems.js';

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
    totalItems: 0,
};
// create a slice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.items = state.items.filter((item) => item.id !== id);
                state.totalItems -= existingItem.quantity;
            }
        },
        incrementItem: (state, { payload }) => {
            const id = payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
                state.totalItems++;
            }
        },
        decrementItem: (state, { payload }) => {
            const id = payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity--;
                state.totalItems--;
            }
        }
    }
})

// export the action creator
export const { removeItem, incrementItem, decrementItem } = cartSlice.actions;

// export the reducer
export default cartSlice.reducer;
