import AddToCart from '../Button/AddToCart';
import './Product.css';

const Product = ({ ...product }) => {
    return (
        <div className="product-maindiv">
            <div className="product-imagediv">
                <img src={product.image} className="product-image" alt={product.name} />
                <span className="product-name">{product.name}</span>
            </div>
            <div>
                <span className="product-shortdesc">{product.shortDescription}</span>
            </div>
            <div className="product-pricmanuf">
                <span className="product-name">Manufactured By: {product.manufacturer}</span>
                <span className="product-price">${product.salePrice}</span>
            </div>
            <div className="product-addtocartqty">
                <span className="product-qty">Qty: {product.quantity}</span>
                <AddToCart {...product} />
            </div>
        </div >
    );
}

export default Product;