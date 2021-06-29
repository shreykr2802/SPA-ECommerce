import './Content.css';
import Product from '../Product/Product';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Content = () => {

    const products = useSelector((state: RootState) => state.ecommerce.data);

    return (
        <main>
            <div className="content">
                {
                    products.map((product) => {
                        return <Product {...product} key={product.id} />
                    })
                }
            </div>
        </main>
    );
}

export default Content;