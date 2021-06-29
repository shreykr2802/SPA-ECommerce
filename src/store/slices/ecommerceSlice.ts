import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EcommerceState {
    data: any[]
}

const initialState: EcommerceState = {
    data: []
};

const ecommerceSlice = createSlice({
    name: "ecommerce",
    initialState,
    reducers: {
        fetchDataSuccess: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
        }
    }
});

export const { fetchDataSuccess } = ecommerceSlice.actions;
export default ecommerceSlice.reducer;
