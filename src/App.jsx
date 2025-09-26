import React, { Suspense } from 'react';
import './App.css'
import Countries from './Components/countries/countries';

const countryPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

function App() {
  
  return (

    <Suspense fallback={<div>Loading...</div>}>
     <Countries countryPromise = {countryPromise}>

     </Countries>
    </Suspense>
  );
}
// https://openapi.programming-hero.com/api/all
// https://openapi.programming-hero.com/api/alpha/116
// https://openapi.programming-hero.com/api/lang/english
// https://openapi.programming-hero.com/api/name/bangladesh

export default App;
