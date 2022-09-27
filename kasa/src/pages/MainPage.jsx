// @ts-nocheck

// CSS and files import
import '../styles/MainPage.css';
import bannerFile from "../assets/MainBanner.png";

// React components import
import { useEffect, useState } from 'react';

// Custom components import
import LogementCard from '../components/LogementCard';
import Banner from '../components/Banner';

/**
 * 
 * @returns Code for the MainIndex component (Main section with Logement Cards)
 */
function MainPage() {
  // Use state for logementsList
  const [logementsList, setLogementsList] = useState([]);
  useEffect(() => {
    getLogements().then(data => setLogementsList(data));
  }, [logementsList])

  /**
   * 
   * @returns all Logements data as an array from JSON file
   */
  async function getLogements() {
    const response = await fetch("/data/logements.json")
    const data = await response.json();        
    return data;
  }  

  return (
    <main>
      <Banner bannerPicture={bannerFile} slogan="Chez vous, partout et ailleurs"/>
      <section className="flex mainSection flex--row flex--wrap">
      {logementsList.map((logement) => (
        <LogementCard logementData={logement} key={logement.id} />
      ))}
    </section>
    </main>    
  );     
}
export default MainPage;