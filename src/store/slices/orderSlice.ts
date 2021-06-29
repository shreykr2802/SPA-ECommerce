import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "./cartSlice";

interface OrderState {
    orderProduct: CartProduct[];
    showMessage: boolean
}

const initialState: OrderState = {
    orderProduct: [],
    showMessage: false
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        orderSuccess: (state, action: PayloadAction<CartProduct[]>) => {
            state.orderProduct = [
                ...action.payload
            ]
            state.showMessage = true;
        },
        closeMessage: (state) => {
            state.showMessage = false;
        }
    }
});

export const { orderSuccess, closeMessage } = orderSlice.actions;
export default orderSlice.reducer;
