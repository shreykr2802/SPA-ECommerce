import './Content.css';
import Product from '../Product/Product';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Content = () => {

    const products = useSelector((state: RootState) => state.ecommerce.data);

    return (
        <main className="content">
            {
                products.map((product) => {
                    return <Product {...product} key={product.id} />
                })
            }
        </main>
    );
}

export default Content;