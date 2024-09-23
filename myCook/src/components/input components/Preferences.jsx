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
                <div>
                    <h3>Cuisine</h3>
                    <select value={receipt.cuisine} onChange={cuisineChangeHandler} name="cuisines" id="cuisines">
                        <option value={''} key={0}>No preference</option>
                        {
                            cuisines.current.map((data, index) => (
                                <option value={data} key={index+1}>{data}</option>
                            ))
                        }
                    </select>
                </div>
                
                <div>
                    <h3>Diet</h3>
                    <select name="diets" id="diets">
                        {

                        }
                    </select>
                </div>
            </form>
        </section>
    );
}

export default Preferences;