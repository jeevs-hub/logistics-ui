import React, { useState, useEffect } from 'react';

const SearchButton = ({ placeholder, onSearch, delay = 500 }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => onSearch(query), delay);
        return () => clearTimeout(handler);
    }, [query, delay]);

    const handleChange = (event) => setQuery(event.target.value);

    return (
        <input 
            type="text" 
            className="form-control" 
            placeholder={placeholder} 
            value={query}
            onChange={handleChange} 
        />
    )
}

export default SearchButton;