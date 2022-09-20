// @ts-nocheck

// CSS and files import
import '../styles/MainIndex.css';

// React components import
import { useEffect, useState } from 'react';

// Custom components import
import LocationCard from './LocationCard';
import Banner from './Banner';

/**
 * 
 * @returns all Locations data as an array from JSON file
 */
async function getLocations() {
  const response = await fetch("/data/logements.json")
  const data = await response.json();        
  return data;
}

/**
 * 
 * @returns Code for the MainIndex component (Main section with Location Cards)
 */
function MainIndex() {
  const [locationsList, setLocationsList] = useState([]);
  useEffect(() => {
    getLocations().then(data => setLocationsList(data));
  }, [locationsList])
  return (
    <main>
      <Banner />
      <section className="flex mainSection flex flex--row flex--wrap">
      {locationsList.map((location) => (
        <LocationCard locationData={location} key={location.id} />
      ))}
    </section>
    </main>    
  );     
}
export default MainIndex;