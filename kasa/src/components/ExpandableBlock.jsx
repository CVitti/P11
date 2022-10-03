// @ts-nocheck

// CSS import
import '../styles/ExpandableBlock.css';

// Import FontAwesomeIcon components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * @returns Code for the Banner component (Background image, gradient and slogan)
 */
function ExpandableBlock({title, paragraph, list, isHalfWidth}) {

  /**
   * Used to hide/display the content of the expandableBlock
   * @param {*} event triggered when clicking on expandableBlockHeader
   */
  function handleContentExpansion(event) {
    const linkedContent = event.target.nextElementSibling;
    let arrowIcon = event.target.lastChild;
    linkedContent.classList.toggle("hide");
    linkedContent.classList.toggle("flex");
    
    // If content is displayed, arrow points up, else it points down
    if (linkedContent.classList.contains("flex")) {
      arrowIcon.style.transform = "rotate(180deg)";
    }else{
      arrowIcon.style.transform = "rotate(0deg)";
    }
  }

  return (
    // If the isHalfWidth prop is defined then add class to set width to half
    <div className={`flex flex--wrap flex--column expandableBlock ${isHalfWidth ? "expandableBlockHalfWidth" : "expandableBlockFullWidth"}`}>
      
      {/* Header of the expandable block, displays/hides content on click */}
      <div className='flex expandableBlockHeader' onClick={(e) => handleContentExpansion(e)}>
          {title}
          <FontAwesomeIcon icon={faAngleDown} />
      </div>

      {/* Content of the block, hidden by default, displayed on click */}
      <div className='hide expandedContent'>
        {/* If the block needs to display a paragraph */}
        {paragraph && <p className="flex detailsParagraph">{paragraph}</p>}

        {/* If the block needs to display a list (ex : equipments)*/}
        {list && 
          <ul className='flex flex--column detailsList'>
            {list.map((item) => (
              <li className='detailsListItem' key={item}>{item}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
export default ExpandableBlock;