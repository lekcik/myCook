function Button({ inputValue }) {
    return (
      <section className="button">
        <button>Display</button>
        <div className="displayCont">
          {inputValue}
        </div>
      </section>
    );
  }
  
  export default Button;
  