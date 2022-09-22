// @ts-nocheck

// CSS and files import
import '../styles/MainPage.css';
import bannerFile from "../assets/MainBanner.png";

// React components import
import { useEffect, useState } from 'react';

// Custom components import
import LocationCard from '../components/LocationCard';
import Banner from '../components/Banner';

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
function MainPage() {
  const [locationsList, setLocationsList] = useState([]);
  useEffect(() => {
    getLocations().then(data => setLocationsList(data));
  }, [locationsList])
  return (
    <main>
      <Banner bannerPicture={bannerFile} slogan="Chez vous, partout et ailleurs"/>
      <section className="flex mainSection flex--row flex--wrap">
      {locationsList.map((location) => (
        <LocationCard locationData={location} key={location.id} />
      ))}
    </section>
    </main>    
  );     
}
export default MainPage;