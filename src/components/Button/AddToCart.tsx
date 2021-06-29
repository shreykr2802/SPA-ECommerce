import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, updateQuantityInCart } from '../../store/slices/cartSlice';
import { updateTotalQuantityOfProduct } from '../../store/slices/ecommerceSlice';
import { RootState } from '../../store/store';
import './Button.css';

const AddToCart = ({ ...product }: any) => {

    const [buttonClicked, setButtonClicked] = useState(false);
    const [canAdd, setCanAdd] = useState(true);
    const dispatch = useDispatch();
    const cartProduct = useSelector((state: RootState) => state.cart.cartProduct).find((cartProd) => cartProd.id === product.id)

    const handleAddToCart = () => {
        setButtonClicked(true);
        dispatch(addProductToCart({
            id: product.id,
            name: product.name,
            price: product.salePrice,
            quantity: 1,
            totalPrice: product.salePrice
        }));
        dispatch(updateTotalQuantityOfProduct({ id: product.id, qty: -1 }));
    };

    const handleProductQuantityChange = (increment: boolean) => {
        if (!increment && cartProduct?.quantity === 1) {
            setButtonClicked(false);
        } else if (increment && product.quantity === 1) {
            setCanAdd(false);
        } else {
            setCanAdd(true);
        }
        dispatch(updateQuantityInCart({ id: product.id, qty: increment ? 1 : -1 }));
        dispatch(updateTotalQuantityOfProduct({ id: product.id, qty: increment ? -1 : 1 }));
    }

    return (
        <>
            {
                !buttonClicked ?
                    (
                        <button className="addtocart-button" onClick={handleAddToCart}>
                            <span className="addtocart-name">Add to Cart</span>
                        </button>
                    )
                    :
                    (
                        <div className="addtocart-plusminusdiv">
                            <button className="addtocart-plusminus" onClick={() => handleProductQuantityChange(false)}>
                                <span className="addtocart-plusminusicon">-</span>
                            </button>
                            <>
                                <span className="addtocart-name">{cartProduct?.quantity}</span>
                            </>
                            <button className="addtocart-plusminus" onClick={() => handleProductQuantityChange(true)} disabled={!canAdd}>
                                <span className="addtocart-plusminusicon">+</span>
                            </button>
                        </div>
                    )
            }
        </>

    );
}

export default AddToCart;