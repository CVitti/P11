// @ts-nocheck

// CSS and files import
import '../styles/LogementCard.css';

// React/React-router components import
import { Link } from 'react-router-dom';

/**
 * 
 * @param {*} logementData Object containing Logement data
 * @returns Code to build a Logement Card
 */
function LogementCard({logementData}) {
  const logementURL = "/DetailsLogements/" + logementData.id;
  return (
    <Link to={logementURL} className='logementCardLink'>
      <article className="logementCard">
        <img src={logementData.cover} alt={logementData.title} className="logementCardImg"></img>
        <div className="logementCardBground">
          <span className='logementCardTitle'>{logementData.title}</span>          
        </div>        
      </article>
    </Link>      
  );
}
export default LogementCard;