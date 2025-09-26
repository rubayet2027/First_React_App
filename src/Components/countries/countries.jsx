import React, { use } from 'react';
import Country from '../country/country';
import './countries.css';
 

const Countries = ({countryPromise}) => {
    const countriesData = use(countryPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = React.useState([]);

    const handleVisitedCountry = (country) => {
        if(!visitedCountries.includes(country)){
            setVisitedCountries([...visitedCountries, country]);
        }
    }
    return (
        <div >
            <h2>Welcome to React Worlds</h2>
            <h4>Total Countries : {countries.length}</h4>
            <h4>Visited Countries : {visitedCountries.length}</h4>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry = {handleVisitedCountry}/>)
                }

            </div>
        </div>
    );
};

export default Countries;