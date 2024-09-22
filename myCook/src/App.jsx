import { useState, createContext } from 'react';
import Input from './components/input components/Input';
import Header from './components/header components/Header';
import './root.css';
import './general.css';

export const ReceiptContext = createContext(); 

function App() {
  const [receipt, setReceipt] = useState({
    products: [],
    excludeProducts: [],
    cuisine: '',
    excludeCuisine: '',
    diet: '',
    instructionsRequired: false
  });

  return (
    <ReceiptContext.Provider value={[receipt, setReceipt]}>
      <Header />
      <Input />
    </ReceiptContext.Provider>
  );
}

export default App;
