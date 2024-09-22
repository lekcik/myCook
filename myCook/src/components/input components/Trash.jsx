import { useState, useContext } from "react";
import { ReceiptContext } from "../../App";

function Trash() {
    const [receipt, setReceipt] = useContext(ReceiptContext);
    const [inputValue, setInput] = useState('');

    function inputChangeHandler(event) {
        setInput(() => {event.target.value});
    }

    function addProduct(event) {
        event.preventDefault();
        if (inputValue !== '') {
            setReceipt((prevReceipt) => ({
                ...prevReceipt,
                excludeProducts: [...prevExcludeProducts.products, inputValue]
            }));
            setInput('');
        }
    }

    return(
        <section className="trash container">
            <h2>What would you like NOT to eat?</h2>
            <form onSubmit={addProduct}>
                <input 
                    value={inputValue} 
                    onChange={inputChangeHandler} 
                    placeholder="Write products..." 
                />
                <button type="submit">Add Product</button> 
            </form>
        </section>
    );
}

export default Trash;