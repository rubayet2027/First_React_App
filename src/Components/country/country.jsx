import React from 'react';
import './country.css';

const Country = ({country, handleVisitedCountry}) => {
    const name = country.name.common;
    const flag = country.flags.flags.png;
    const [visited, setVisited] = React.useState(false);
    const handleVisit = () => {
        
        setVisited(!visited);
        handleVisitedCountry(name);
    }

    return (
        <div className='country'>
            <img src={flag} alt={country.flags.flags.alt} />
            <p>Name : {name}</p>
            <button onClick={handleVisit}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;