// @ts-nocheck

// CSS import
import '../styles/DetailsPage.css';

// React/React-router components import
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Custom components import
import DetailsBanner from '../components/DetailsBanner';
import Tag from '../components/Tag';
import ExpandableBlock from'../components/ExpandableBlock';

// Import FontAwesomeIcon components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * @returns Code for the LogementPage component (Page detailing about a Logement)
 */
function DetailsPage(){
    
    // Use state for currentLogement
    const { currentId } = useParams();
    const navigate = useNavigate();
    const [currentLogement, setCurrentLogement] = useState({tags:[], pictures:[], location:"", host:{name:"", picture:""}, rating:"", equipments:[]});
    useEffect(() => {
        getCurrentLogementData().then(data => setCurrentLogement(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * 
     * @returns all Logements data as an array from JSON file
     */
    async function getCurrentLogementData() {
        const response = await fetch("/data/logements.json")
        const data = await response.json();        
        const filteredData = data.find(logement => logement.id === currentId);
        // If an invalid currentId is used and function getCurrentLogementData returns no data, redirects to the Error Page
        if (filteredData === undefined) {
            navigate("/Error");
        }
        return filteredData;
    }    

    // Format the location string to display City and region in the right order
    const city = currentLogement.location.split(" - ")[1];
    const region = currentLogement.location.split(" - ")[0];

    // Format the name of the host
    const firstName = currentLogement.host.name.split(" ")[0];
    const lastName = currentLogement.host.name.split(" ")[1];

    // Parsing rating number from data
    const maxRating = 5;
    const currentRating = parseInt(currentLogement.rating);
    let starsList = [];

    for (let index = 0; index < maxRating; index++) {
        // If index didn't reach currentRating, add a full star, else add an empty star until maxRating
        if(index < currentRating){
            starsList.push("filledStar");
        }else{
            starsList.push("emptyStar");
        }
    }
    
    return(        
        <section className='flex flex--wrap flex--row detailsSection'>
            {/* Banner containing Caroussel */}
            <DetailsBanner bannerPictures={currentLogement.pictures}/>

            {/* Block containing the Logement title, location and tags */}
            <div className='flex flex--column detailsContainer'>
                <h1 className='logementTitle'>{currentLogement.title}</h1>
                <h2 className='logementLocation'>{city}, {region}</h2>
                <div className='tagsContainer flex flex--row'>
                    {currentLogement.tags.map((tag) => (
                        <Tag title={tag} key={tag} />
                    ))}
                </div>
            </div>

            {/* Block containing host infos and rating stars*/}
            <div className='flex flex--column hostAndRatingContainer'>
                <div className='flex flex--row hostContainer'>
                    <p>{firstName}<br/>{lastName}</p>               
                    <img src={currentLogement.host.picture} alt="Photographie de profil de l'hôte" className='hostPicture'/>
                </div>
                <div className='flex flex--row ratingContainer'>
                    {starsList.map((type, index) => (
                        <FontAwesomeIcon icon={faStar} className={type} key={index} size="xl"/>
                    ))}
                </div>
            </div>

            {/* Block containing Description and Equipments list */}
            <div className='flex flex--row expandableBlocksContainer'>
                <ExpandableBlock title="Description" paragraph={currentLogement.description} isHalfWidth="yes" />
                <ExpandableBlock title="Équipements" list={currentLogement.equipments} isHalfWidth="yes" />
            </div>
        </section>
    );      
}
export default DetailsPage;