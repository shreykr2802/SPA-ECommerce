import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cartSlice from "./slices/cartSlice";
import ecommerceReducer from "./slices/ecommerceSlice";
import orderSlice from "./slices/orderSlice";

const rootReducer = combineReducers({
    ecommerce: ecommerceReducer,
    cart: cartSlice,
    order: orderSlice
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
