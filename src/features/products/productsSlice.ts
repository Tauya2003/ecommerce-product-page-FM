import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

interface productsState {
  products: {
    id: number;
    name: string;
    price: number;
    description: string;
    discount: number;
    images: {
      id: number;
      image: string;
      thumbnail: string;
    }[];
  }[];
}

const initialState: productsState = {
  products: products,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
