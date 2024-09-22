import { useState } from "react";

function Input({products, setProducts}) {
    const [inputValue, setInput] = useState('');

    function inputChangeHandler(event) {
        setInput(event.target.value);
    }

    function addProduct() {
        if (inputValue !== '') {
            setProducts((p) => [...p, inputValue]);
            setInput('');
        }
    }

    function removeProduct(index) {
        let temp = products.filter((_, i) => 
            i !== index
        );
        setProducts(temp);
    }

    return(
        <section className="input container" aria-label="Details about your products">
            <h2>What's in your fridge today?</h2>
            <div>
                <input value={inputValue} onChange={(e) => {inputChangeHandler(e)}} />
                <button onClick={addProduct}>Add Product</button>
            </div>

            <ul className="products" aria-label="list of your products">
                {
                    products.map((data, index) => (
                        <li key={index}><span>{data}</span> <button onClick={() => {removeProduct(index)}}>X</button></li>
                    ))
                }
            </ul>
        </section>
    );
}

export default Input;