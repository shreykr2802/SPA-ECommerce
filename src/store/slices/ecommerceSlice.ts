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
        },
        updateTotalQuantityOfProduct: (state, action: PayloadAction<{ id: number, qty: number }>) => {
            const allProducts = [...state.data];
            const productToUpdateIndex = allProducts.findIndex(product => product.id === action.payload.id);
            const productToUpdate = allProducts[productToUpdateIndex];
            productToUpdate.quantity = productToUpdate.quantity + action.payload.qty;
            allProducts[productToUpdateIndex] = productToUpdate;
            state.data = [...allProducts]
        }
    }
});

export const { fetchDataSuccess, updateTotalQuantityOfProduct } = ecommerceSlice.actions;
export default ecommerceSlice.reducer;
