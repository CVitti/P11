// @ts-nocheck

// CSS import
import '../styles/DetailsBanner.css';

// Import FontAwesomeIcon components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

/**
 * 
 * @returns Code for the Banner component (Background image, gradient and slogan)
 */
function DetailsBanner({bannerPictures}) {
  
  // useState bannerPictures
  const [picturesList, setPicturesList] = useState([]);
  useEffect(() => {
    setPicturesList(bannerPictures)
  }, [bannerPictures]);
  const nbPictures = picturesList.length;

  // useState currentPictureIndex & currentPicture
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [currentPicture, setCurrentPicture] = useState("");  
  useEffect(() => {
    setCurrentPicture(picturesList[currentPictureIndex])
  }, [currentPictureIndex, picturesList]);

  /**
   * 
   * @param {*} e click event
   * @param {*} step defines if the navigation goes to the next of previous picture
   */
  function changePicture(e, step) {
    e.preventDefault();
    switch (step) {
      case "previous":
        if (currentPictureIndex === 0) {
          setCurrentPictureIndex(nbPictures - 1);
        }else{
          setCurrentPictureIndex(currentPictureIndex => currentPictureIndex - 1);
        }
        break;

      case "next":
        if (currentPictureIndex === nbPictures - 1) {
          setCurrentPictureIndex(0);
        }else{
          setCurrentPictureIndex(currentPictureIndex => currentPictureIndex + 1);
        }
        break;
    
      default:
        setCurrentPictureIndex(0);
        break;
    }
  }
  
  return (
    <div className="flex detailsBanner">
      <img src={currentPicture} alt="Photographie du logement" className="detailsPicture"></img>
      {/* If more than one picture in the array, display arrows to navigate between pictures and pictures counter */}
      {nbPictures > 1 ? 
        <React.Fragment>
          <div className='flex flex--row navPicturesArrows'>
            <div className='flex'>
                <FontAwesomeIcon icon={faAngleDown} size="6x" rotation={90} fade inverse className='bannerArrow' onClick={(e) =>{changePicture(e, "previous")}}/>
            </div>
            <div className='flex'>
                <FontAwesomeIcon icon={faAngleDown} size="6x" rotation={270} fade inverse className='bannerArrow' onClick={(e) =>{changePicture(e, "next")}}/>
            </div>
          </div>
          <div className='flex picturesCounter'>{currentPictureIndex + 1} / {nbPictures}</div> 
        </React.Fragment>
        : ""
      }      
    </div>
  );
}
export default DetailsBanner;