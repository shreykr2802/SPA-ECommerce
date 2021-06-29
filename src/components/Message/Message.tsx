import { useDispatch, useSelector } from 'react-redux';
import { closeMessage } from '../../store/slices/orderSlice';
import { RootState } from '../../store/store';
import './Message.css';

const Message = () => {

    const orderProducts = useSelector((state: RootState) => state.order.orderProduct);
    const totalValues = orderProducts.reduce((a: any, b: any) => ({ quantity: a.quantity + b.quantity, totalPrice: a.totalPrice + b.totalPrice, price: 0, name: '', id: 0 }), { quantity: 0, totalPrice: 0, price: 0, name: '', id: 0 });

    const dispatch = useDispatch();

    return (
        <div className="message-container">
            <div>
                <span>Order Successful</span>
            </div>
            <div>
                <span>Order Details</span>
                <ul>
                    {
                        orderProducts.map((product) => {
                            return (
                                <li>
                                    <span>{product.name} - {product.quantity} Nos - ${product.totalPrice.toFixed(2)}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <span>Total Amount: ${totalValues.totalPrice.toFixed(2)}</span>
            </div>
            <div>
                <button className="close-button" onClick={() => dispatch(closeMessage())}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Message;