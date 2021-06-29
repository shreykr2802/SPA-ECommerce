import { useDispatch, useSelector } from 'react-redux';
import { clearCartProducts } from '../../store/slices/cartSlice';
import { orderSuccess } from '../../store/slices/orderSlice';
import { RootState } from '../../store/store';
import './Button.css';

const Checkout = () => {

    const cartProducts = useSelector((state: RootState) => state.cart.cartProduct);
    const dispatch = useDispatch();

    const handleCheckout = () => {
        dispatch(orderSuccess(cartProducts));
        dispatch(clearCartProducts());
    }

    return (
        <button className="checkout-button" onClick={handleCheckout}>
            Checkout
            <i className="fas fa-arrow-circle-right" style={{ marginLeft: "0.3rem" }}></i>
        </button>
    )
}

export default Checkout;