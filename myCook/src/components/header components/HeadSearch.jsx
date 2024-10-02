import { useEffect } from "react";

function HeadSearch(props) {

    function closeHandler() {
        props.headSearchShow(false);
    }

    return(
        <section className="blur" aria-label="search results">
            <section className="headSearch" aria-label="search results">
                <button className="close-btn" onClick={closeHandler}>X</button>
                <h2>Search results</h2>
                <ul>
                    {
                        props.data.results.map((data, index) => (
                            <li key={index}>
                               <p>{data.title}</p>
                                <img src={data.image} alt="beautiful photo" />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </section>
    );
}

export default HeadSearch;
