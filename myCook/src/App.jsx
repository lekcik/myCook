import { useState, createContext } from 'react';
import Input from './components/input components/Input';
import Header from './components/header components/Header';
import './root.css';
import './general.css';

export const ProductsContext = createContext(); 

function App() {
  const [products, setProducts] = useState([]); 

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <Header />
      <Input />
    </ProductsContext.Provider>
  );
}

export default App;
