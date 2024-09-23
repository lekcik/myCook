import { useState, useContext } from "react";
import { ReceiptContext } from "../../App";

function Trash() {
    const [receipt, setReceipt] = useContext(ReceiptContext);
    const [inputValue, setInput] = useState('');

    function inputChangeHandler(event) {
        setInput(() => event.target.value);
    }

    function addProduct(event) {
        event.preventDefault();
        if (inputValue !== '') {
            setReceipt((prevReceipt) => ({
                ...prevReceipt,
                excludeProducts: [...prevReceipt.excludeProducts, inputValue]
            }));
            setInput('');
        }
    }

    function removeProduct(index) {
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            excludeProducts: prevReceipt.excludeProducts.filter((_, i) => i !== index)
        }));
    }

    return(
        <section className="trash products container">
            <h2>What would you like NOT to eat?</h2>
            <form onSubmit={addProduct}>
                <input 
                    value={inputValue} 
                    onChange={inputChangeHandler} 
                    placeholder="Write products..." 
                />
                <button type="submit">Add Product</button> 
            </form>

            <ul className="products" aria-label="list of products you don't eat">
                {receipt.excludeProducts.map((data, index) => (
                    <li key={index}>
                        <button onClick={() => {removeProduct(index)}}>X</button>
                        <span>{data}</span> 
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Trash;