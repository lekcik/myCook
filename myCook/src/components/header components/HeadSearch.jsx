import { useEffect } from "react";

function HeadSearch(props) {

    useEffect(() => {
        console.log(props.data)
    }, [])

    function closeHandler() {
        props.headSearchShow(false);
    }

    return(
        <section className="blur" aria-label="search results">
            <section className="headSearch container" aria-label="search results">
                <button className="close-btn" onClick={closeHandler}>X</button>
                <h2>Search results</h2>
                <ul>
                    {
                        props.data.results.map((data, index) => (
                            <li key={index}>
                                <details>
                                    <summary>
                                        <p>{data.title}</p>
                                        <img src={data.image} alt="beautiful photo" />
                                    </summary>
                                    {data.summary}
                                </details>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </section>
    );
}

export default HeadSearch;
