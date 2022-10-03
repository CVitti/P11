// @ts-nocheck

// CSS import
import '../styles/Banner.css';

/**
 * 
 * @returns Code for the Banner component (Background image, gradient and slogan)
 */
function Banner({bannerPicture, slogan, page}) {
  return (
    <section className="flex mainBanner">
      <img src={bannerPicture} alt="Paysage en arrière plan" className={"flex imgBanner" + page}></img>
      <div className="bannerSloganBackground flex"></div>
      {/* Add a slogan if defined in props when calling component */}
      {slogan && <div className="bannerSlogan flex">{slogan}</div>}
    </section>
  );
}
export default Banner;