import { useState } from "react";

import './SearchBar.css'

function Searchbar({onSubmit}){
    const [term, setTerm] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    const handleChange = (event) =>{
        setTerm(event.target.value);
        // setTerm(event.target.value.replace(/[0-9]/, ''));
    };

    return(<div className="search-bar">
        <label>Search Term</label>
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={term} onChange={handleChange}/>
            <br/>
            <button>Submit</button>
        </form>
    </div>)
}

export default Searchbar;