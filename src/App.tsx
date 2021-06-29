import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchDataSuccess } from './store/slices/ecommerceSlice';
import products from './store/mockData/productsMocked';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Message from './components/Message/Message';
import { RootState } from './store/store';

function App() {

  const dispatch = useDispatch();
  const showMessage = useSelector((state: RootState) => state.order.showMessage)

  useEffect(() => {
    dispatch(fetchDataSuccess(products));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Content />
      {showMessage && <Message />}
    </div>
  );
}

export default App;
