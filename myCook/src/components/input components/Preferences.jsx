import { useState, useContext, useRef } from "react";
import { ReceiptContext } from "../../App";

function Preferences() {
    const [receipt, setReceipt] = useContext(ReceiptContext);
    const cuisines = useRef([
        'African', 'Asian', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese' 
    ]);

    function cuisineChangeHandler(event) {
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            cuisine: event.target.value
        }));
    }

    return(
        <section className="preferences container">
            <h2>Preferences</h2>

            <form aria-label="your receipt preferences">
                <select value={receipt.cuisine} onChange={cuisineChangeHandler} name="cuisines" id="cuisines">
                    {
                        cuisines.current.map((data, index) => (
                            <option value={data} key={index}>{data}</option>
                        ))
                    }
                </select>
            </form>
        </section>
    );
}

export default Preferences;