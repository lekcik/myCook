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

    function changeHadler(event) {
        const prop = event.target.name;
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            [prop]: event.target.value 
        }));
    }

    return(
        <section className="preferences container">
            <h2>Preferences</h2>

            <form aria-label="your receipt preferences">
                <div>
                    <h3>Cuisine</h3>
                    <select value={receipt.cuisine} name="cuisine" id="cuisine" onChange={changeHadler}>
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
                    <select value={receipt.diet} name="diet" id="diet" onChange={changeHadler}>
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
                    <select value={receipt.instructionsRequired} name="instructionsRequired" id="instructionsRequired" onChange={changeHadler}>
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                </div>
            </form>
        </section>
    );
}

export default Preferences;
