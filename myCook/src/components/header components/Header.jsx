import { useEffect, useState } from "react";
import { getData } from "../getData";
import './header.css';

function Header() {
    let [inputValue, setInput] = useState('');

    function inputChangeHandler(event) {
        setInput(event.target.value);
    }

    async function searchHandler(event) {
        event.preventDefault();
        
        const data = await getData(inputValue);
        console.log(data);
    }

    return(
        <form onSubmit={searchHandler} className="searchBar" aria-label="Search recipies">
            <input onChange={(e) => {inputChangeHandler(e)}} placeholder="Quick search for recipies..." />
        </form>
    );
}

export default Header;