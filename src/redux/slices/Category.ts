import { createSlice } from "@reduxjs/toolkit";
import type { CategoryData } from "../../models/CategoryData";

interface CategoryState {
    data: CategoryData[]
}

const initialState: CategoryState = {
    data: []
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setCategories } = categorySlice.actions

export default categorySlice.reducer