import Input from './Input.jsx';
import Button from './Button.jsx';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Button inputValue={inputValue} />
    </>
  );
}

export default App;
