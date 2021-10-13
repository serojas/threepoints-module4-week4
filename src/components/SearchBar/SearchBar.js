import React from 'react';


function SearchBar ({findPostBySearch}) {
    const bar ={
        width:'100%'
    }

  

    return (
        <div className="input-group rounded" style={bar}>
            <input type="search" 
                   className="form-control rounded" 
                   placeholder="Search" 
                   aria-label="Search" 
                   aria-describedby="search-addon" 
                   onChange={(event) => {
                       findPostBySearch(event.target.value)
                   }}/>
        </div>
    );
}

export default SearchBar;