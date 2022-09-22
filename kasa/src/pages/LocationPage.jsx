// @ts-nocheck

// CSS import
import '../styles/LocationPage.css';

// React/React-router components import
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

/**
 * 
 * @returns all Locations data as an array from JSON file
 */
 async function getCurrentLocationData(id) {
    const response = await fetch("/data/logements.json")
    const data = await response.json();        
    const filteredData = data.filter(location => location.id === id)[0];
    return filteredData;
  }

/**
 * 
 * @returns Code for the LocationPage component (Page detailing about a Location)
 */
function LocationPage(){
    const { currentId } = useParams();
    const [currentLocation, setCurrentLocation] = useState([]);
    useEffect(() => {
        getCurrentLocationData(currentId).then(data => setCurrentLocation(data));
    }, [currentId]);

    // If an invalid currentId is used and function getCurrentLocationData returns no data, redirects to the Error Page
    if (currentLocation === undefined) {
        return (
            <Navigate to="/*" replace />
        );
    }
    // Else Location details are displayed
    else{
        return(        
            <div className='test'>{currentLocation.title}</div>
        );
    }   
}
export default LocationPage;