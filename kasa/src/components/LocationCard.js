// @ts-nocheck

// CSS and files import
import '../styles/LocationCard.css';

/**
 * 
 * @param {*} locationData Objet contenant les données de la location parcourue
 * @returns code HTML d'une card pour une location
 */
function LocationCard({locationData}) {
    return (
      <article className="locationCard">
        <img src={locationData.cover} alt={locationData.title} className="locationCardImg"></img>
        <div className="locationCardBground">
          <span className='locationCardTitle'>{locationData.title}</span>          
        </div>        
      </article>
    );
}
export default LocationCard;