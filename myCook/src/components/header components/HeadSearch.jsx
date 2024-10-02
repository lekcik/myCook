import { useEffect } from "react";

function HeadSearch(props) {

    useEffect(() => {
        console.log(props.data.results[0]);
    }, [])

    function closeHandler() {
        props.headSearchShow(false);
    }

    return(
        <section className="headSearch" aria-label="search results">
            <h2>Search results</h2>
            <button onClick={closeHandler}>X</button>
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
    );
}

export default HeadSearch;