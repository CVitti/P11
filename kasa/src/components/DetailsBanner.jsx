// @ts-nocheck

// CSS import
import '../styles/DetailsBanner.css';

// Import FontAwesomeIcon components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * @returns Code for the Banner component (Background image, gradient and slogan)
 */
function DetailsBanner({bannerPictures}) {
  // Use state bannerPictures

  // Use state currentBanner

  return (
    <div className="flex detailsBanner">
      <img src={bannerPictures[0]} alt="Photographie du logement" className="detailsPicture"></img>
      <div className='flex flex--row navPicturesArrows'>
          <div className='flex previousArrow'>
              <FontAwesomeIcon icon={faAngleDown} size="6x" rotation={90} fade inverse />
          </div>
          <div className='flex nextArrow'>
              <FontAwesomeIcon icon={faAngleDown} size="6x" rotation={270} fade inverse />
          </div>
      </div>
    </div>
  );
}
export default DetailsBanner;