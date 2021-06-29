import './Header.css';
import Checkout from '../Button/Checkout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Header = () => {

    const cartProducts = useSelector((state: RootState) => state.cart.cartProduct);
    const totalQty = cartProducts.reduce((a: any, b: any) => ({ quantity: a.quantity + b.quantity, totalPrice: a.totalPrice + b.totalPrice, price: 0, name: '', id: 0 }), { quantity: 0, totalPrice: 0, price: 0, name: '', id: 0 });

    return (
        <header className="header">
            <div style={{ padding: "0.4rem" }}>
                <i className="fas fa-store" style={{ height: "1rem", width: "1rem" }}></i>
                <span className="header-text">E-Commerce</span>
            </div>
            <div>
                <i className="fas fa-shopping-cart" style={{ marginRight: "0.3rem" }}></i>
                <span className="header-text">Cart Details: </span>
                <span className="header-text">Total Quantity:  </span><span className="header-textvalue">{totalQty.quantity}</span>
                <span className="header-text">Cart value:  </span><span className="header-textvalue">${totalQty.totalPrice.toFixed(2)}</span>
            </div>
            <div>
                <Checkout />
            </div>
        </header>
    );
}

export default Header;