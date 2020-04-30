
import React, { useState, useEffect, useRef } from 'react';
import fetchData from './DataCall';

function Search(){
    const [info, setInfo] = useState(null);
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);

    };


    //i dont know how to use that fetchData thing, i need the json that it returns to setInfo but how  to access it?
    const searchFilm = async (e) => {
        e.preventDefault();
        /*    fetchData("search/movie", {
                query })
            .then(data => {
                    setInfo(data.result);
                    console.log(data.results)

            });*/

        const proxy = "https://cors-anywhere.herokuapp.com/";

        //fetch stream of data
        const response1 = await fetch(`${proxy}https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${query}&page=1`);
        //convert to json
        const data = await response1.json();

        //set json object into moviesList array, every time there is a new search this will refresh itself
        setInfo(data.results);

        console.log(info)


    };

    //THIS RETURN WAS CLASHING
    /*
    if (info === null || !info.status) {
        return null;
    }*/

    console.log(info);

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

