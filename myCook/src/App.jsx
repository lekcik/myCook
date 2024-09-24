import { useState, useEffect, createContext } from 'react';
import Input from './components/input components/Input';
import Header from './components/header components/Header';
import Output from './components/output components/Output';
import './root.css';
import './general.css';

export const ReceiptContext = createContext(); 

function App() {
  const [receipt, setReceipt] = useState(() => {
    const savedReceipt = localStorage.getItem('receipt');
    return savedReceipt 
      ? JSON.parse(savedReceipt) 
      : {
          products: [],
          excludeProducts: [],
          cuisine: '',
          diet: '',
          instructionsRequired: false
        };
  });

  useEffect(() => {
    localStorage.setItem('receipt', JSON.stringify(receipt));
  }, [receipt]);

  return (
    <ReceiptContext.Provider value={[receipt, setReceipt]}>
      <Header />
      <Input />
      <Output />
    </ReceiptContext.Provider>
  );
}

export default App;
