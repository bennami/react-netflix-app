import React from 'react';

function Searchbar(props){
    return (
        <div className="searchBar">
            <form onSubmit={props.handleSubmit} method="GET">
                <input type="text" name="query" placeholder="search..." onChange={props.handleChange}/>
                <button>SEARCH</button>
            </form>
        </div>
    );
}

