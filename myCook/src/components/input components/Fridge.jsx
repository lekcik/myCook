import { useContext, useState } from "react";
import { ReceiptContext } from "../../App.jsx";
import './fridge.css'; 

function Fridge() {
    const [receipt, setReceipt] = useContext(ReceiptContext);
    const [inputValue, setInput] = useState('');

    function inputChangeHandler(event) {
        setInput(event.target.value);
    }

    function addProduct(event) {
        event.preventDefault();
        if (inputValue !== '') {
            setReceipt((prevReceipt) => ({
                ...prevReceipt,
                products: [...prevReceipt.products, inputValue]
            }));
            setInput('');
        }
    }

    function removeProduct(index) {
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            products: prevReceipt.products.filter((_, i) => i !== index)
        }));
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
                {receipt.products.map((data, index) => (
                    <li key={index}>
                        <button onClick={() => {removeProduct(index)}}>X</button>
                        <span>{data}</span> 
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Fridge;
