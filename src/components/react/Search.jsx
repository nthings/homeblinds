import React, { useState } from 'react';

const blindsData = [/* Your updated JSON data here */];

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlinds, setFilteredBlinds] = useState(blindsData);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredBlinds(blindsData.filter(blind => 
            blind.title.toLowerCase().includes(term) ||
            blind.roomSuitability.some(room => room.toLowerCase().includes(term))
        ));
    };

    return (
        
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="blinds-grid">
                {filteredBlinds.map(blind => (
                    <div key={blind.id} className="blind-card">
                        <img src={blind.image} alt={blind.title} />
                        <h3>{blind.title}</h3>
                        <p>{blind.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
