// @ts-nocheck

// CSS and files import
import '../styles/Tag.css';

/**
 * 
 * @param {*} title of the tag
 * @returns Code to build a Tag
 */
function Tag({title}) {
  return (
    <div className='tag'>
      {title}
    </div>    
  );
}
export default Tag;