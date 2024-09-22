import { useContext, useState } from "react";
import { ProductsContext } from "../../App.jsx";
import './fridge.css'; 

function Fridge() {
    const [products, setProducts] = useContext(ProductsContext);
    const [inputValue, setInput] = useState('');

    function inputChangeHandler(event) {
        setInput(event.target.value);
    }

    function addProduct(event) {
        event.preventDefault();
        if (inputValue !== '') {
            setProducts((p) => [...p, inputValue]);
            setInput('');
        }
    }

    function removeProduct(index) {
        let temp = products.filter((_, i) => i !== index);
        setProducts(temp);
    }

    return (
        <section className="fridge container" aria-label="Details about your products">
            <h2>What's in your fridge today?</h2>
            <form onSubmit={addProduct}>
                <input 
                    value={inputValue} 
                    onChange={inputChangeHandler} 
                    placeholder="Write products..." 
                />
                <button type="submit">Add Product</button> 
            </form>

            <ul className="products" aria-label="list of your products">
                {products.map((data, index) => (
                    <li key={index}>
                        <span>{data}</span> 
                        <button onClick={() => {removeProduct(index)}}>X</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Fridge;
