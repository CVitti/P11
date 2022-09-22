// @ts-nocheck

// CSS and files import
import '../styles/LocationCard.css';

// React/React-router components import
import { Link } from 'react-router-dom';

/**
 * 
 * @param {*} locationData Object containing Location data
 * @returns Code to build a Location Card
 */
function LocationCard({locationData}) {
    const locationURL = "/Location/" + locationData.id;
    return (
      <Link to={locationURL}>
        <article className="locationCard">
          <img src={locationData.cover} alt={locationData.title} className="locationCardImg"></img>
          <div className="locationCardBground">
            <span className='locationCardTitle'>{locationData.title}</span>          
          </div>        
        </article>
      </Link>      
    );
}
export default LocationCard;