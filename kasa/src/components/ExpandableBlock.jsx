// @ts-nocheck

// CSS import
import '../styles/ExpandableBlock.css';

/**
 * 
 * @param {*} event triggered when clicking on expandableBlockHeader, used to hide/display the content of the expandableBlock
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

/**
 * 
 * @returns Code for the Banner component (Background image, gradient and slogan)
 */
function ExpandableBlock({title, paragraph, list}) {
    return (
      <div className='flex flex--wrap expandableBlock'>
        {/* Header of the expandable block, displays/hides content on click */}
        <div className='flex expandableBlockHeader' onClick={(e) => handleContentExpansion(e)}>
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
            </svg>
        </div>
        {/* Content of the block, hidden by default, displayed on click */}
        <div className='hide expandedContent'>
          {/* If the block needs to display a paragraph */}
          {paragraph && <p className="flex detailsParagraph">{paragraph}</p>}

          {/* If the block needs to display a list (ex : equipments)*/}
          {list && 
            <ul className='flex detailsList'>
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