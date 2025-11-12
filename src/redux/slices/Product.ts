import { createSlice } from "@reduxjs/toolkit";
import type { ProductData } from "../../models/ProductData"

interface ProductState {
    data: ProductData[]
}

const initialState: ProductState = {
    data: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setProducts } = productSlice.actions 

export default productSlice.reducer
