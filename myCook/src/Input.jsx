function Input({ inputValue, setInputValue }) {
    function inputChangeHandler(event) {
      setInputValue(event.target.value); 
    }
  
    return (
      <section className="input">
        <input 
          value={inputValue} 
          onChange={inputChangeHandler} 
          placeholder="Enter text here"
        />
      </section>
    );
  }
  
  export default Input;
  