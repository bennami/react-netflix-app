import React, { useState, useEffect, useRef } from 'react';
import fetchData from './DataCall';

function Search(){
    const [info, setInfo] = useState(null);
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const searchFilm = (e) => {
        e.preventDefault();
        fetchData("search/movie", {
            query
        })
            .then(data => {
                setInfo(data.result)
            });
    }

    if (info === null || !info.status) {
        return null;
    }

    console.log(info)

    return (
        <div className="searchBar">
            <form onSubmit={searchFilm} method="GET">
                <input type="text" name="query" placeholder="search..." onChange={handleChange}/>
                <button>SEARCH</button>
            </form>
        </div>
    );
}

export default Search;