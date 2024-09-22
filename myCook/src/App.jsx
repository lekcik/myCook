import { useState } from 'react';
import Input from './components/input components/Input';
import Header from './components/header components/Header';
import './root.css';
import './general.css';

function App() {
  const [products, setProducts] = useState([]); 

  return (
    <>
      <Header />
      <Input products={products} setProducts={setProducts}/>
    </>
  );
}

export default App;
