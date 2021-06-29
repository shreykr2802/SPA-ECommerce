import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: "",
    loading: false,
};

const ecommerceSlice = createSlice({
    name: "ecommerce",
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.error = "";
            state.loading = true;
        },
        fetchDataSuccess: (state, action: PayloadAction<any>) => {
            state.error = "";
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailed } = ecommerceSlice.actions;
export default ecommerceSlice.reducer;
