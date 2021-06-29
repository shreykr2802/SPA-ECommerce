import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchDataSuccess } from './store/slices/ecommerceSlice';
import products from './store/mockData/productsMocked';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataSuccess(products));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
