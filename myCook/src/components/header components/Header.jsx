import { useState } from "react";
import './header.css';

function Header() {
    let [inputValue, setInput] = useState('');

    function inputChangeHandler(event) {
        setInput(event.target.value);
    }

    return(
        <form className="searchBar" aria-label="Search recipies">
            <input onChange={(e) => {inputChangeHandler(e)}} placeholder="Search for recipies..." />
        </form>
    );
}

export default Header;