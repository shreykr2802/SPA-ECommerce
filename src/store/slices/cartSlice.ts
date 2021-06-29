import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct {
    id: number;
    name: string,
    price: number,
    quantity: number;
    totalPrice: number;
}

interface CartState {
    cartProduct: CartProduct[]
}

const initialState: CartState = {
    cartProduct: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<CartProduct>) => {
            state.cartProduct = [
                ...state.cartProduct,
                action.payload
            ]
        },
        updateQuantityInCart: (state, action: PayloadAction<{ id: number, qty: number }>) => {
            let allProducts = [...state.cartProduct];
            const productToUpdateIndex = allProducts.findIndex(product => product.id === action.payload.id);
            const productToUpdate = allProducts[productToUpdateIndex];
            productToUpdate.quantity = productToUpdate.quantity + action.payload.qty;
            if (productToUpdate.quantity === 0) {
                allProducts = [...allProducts.slice(0, productToUpdateIndex), ...allProducts.slice(productToUpdateIndex + 1)]
            } else {
                productToUpdate.totalPrice = productToUpdate.price * productToUpdate.quantity;
                allProducts[productToUpdateIndex] = productToUpdate;
            }
            state.cartProduct = [...allProducts]
        },
        clearCartProducts: (state) => {
            state.cartProduct = []
        },
    }
});

export const { addProductToCart, updateQuantityInCart, clearCartProducts } = cartSlice.actions;
export default cartSlice.reducer;
