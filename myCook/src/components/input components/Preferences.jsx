import { useState, useContext, useRef } from "react";
import { ReceiptContext } from "../../App";

function Preferences() {
    const [receipt, setReceipt] = useContext(ReceiptContext);
    const cuisines = useRef([
        'African', 'Asian', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese' 
    ]);
    const diets = useRef([
        'Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30'
    ]);

    function cuisineChangeHandler(event) {
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            cuisine: event.target.value
        }));
    }

    function dietChangeHandler(event) {
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            diet: event.target.value
        }))
    }

    function instructionsChangeHandler(event) {
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            instructionsRequired: event.target.value
        }))
    }

    function test(event) {
        console.log(event.target.id);
    }

    return(
        <section className="preferences container">
            <h2>Preferences</h2>

            <form onChange={test} aria-label="your receipt preferences">
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
                    <select value={receipt.diet} onChange={dietChangeHandler} name="diets" id="diets">
                        <option value={''} key={0}>No preference</option>
                        {
                            diets.current.map((data, index) => (
                                <option value={data} key={index+1}>{data}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <h3>Instructions required?</h3>
                    <select value={receipt.instructionsRequired} onChange={instructionsChangeHandler} name="instructions" id="instructions">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                </div>
            </form>
        </section>
    );
}

export default Preferences;