import { useEffect, useState } from "react";
import { getData, getRecipe } from "../getData";
import './header.css';
import HeadSearch from "./HeadSearch.jsx";

function Header() {
    const [inputValue, setInput] = useState('');
    const [headSearch, headSearchShow] = useState(false);
    const [data, setData] = useState(null);

    function inputChangeHandler(event) {
        setInput(event.target.value);
    }

    async function searchHandler(event) {
        event.preventDefault();
        
        const fetchedData = await getData(inputValue); 
        setData(fetchedData); 
        console.log(fetchedData);

        console.log(await getRecipe(642583));

        await headSearchGoHandler();
    }

    function headSearchGoHandler() {
        headSearchShow(true);
    }

    return (
        <>
            <form onSubmit={searchHandler} className="searchBar" aria-label="Search recipes">
                <input onChange={inputChangeHandler} placeholder="Quick search for recipes..." />
            </form>

            {
                headSearch && data ? <HeadSearch data={data}/> : null
            }
        </>
    );
}

export default Header;
