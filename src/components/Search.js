import React, { useState, useEffect } from 'react';
import fetchData from './DataCall'
import Home from "../view/Home";

function Search(){
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState(null);
    const [query, setQuery] = useState("")

    useEffect(() => {
        fetchData("search/movie", {
            query
        });
    }, [query]);

    if (data === null || !data.status) {
        return null;
    }

    return (
        <div>
            <Home movies={data.results}/>
        </div>
    );
}

export default Search;