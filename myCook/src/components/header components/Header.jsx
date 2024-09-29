import { useEffect, useState } from "react";
import { getData, getRecipe } from "../getData";
import './header.css';
import HeadSearch from "./HeadSearch.jsx";

function Header() {
    let [inputValue, setInput] = useState('');
    let [toggler, toggle] = useState(false);

    function inputChangeHandler(event) {
        setInput(event.target.value);
    }

    async function searchHandler(event) {
        event.preventDefault();
        
        const data = await getData(inputValue);
        console.log(data);

        console.log(await getRecipe(642583));

        await toggleHandler();
    }

    async function toggleHandler() {
        // if (toggler === false) {
        //     toggle(true);
        // }
        // else {
        //     toggle(false);
        // }
    }

    return (
        <>
            <form onSubmit={searchHandler} className="searchBar" aria-label="Search recipes">
                <input onChange={(e) => {inputChangeHandler(e)}} placeholder="Quick search for recipes..." />
            </form>

            <HeadSearch />
        </>
    );
}

export default Header;