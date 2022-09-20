// @ts-nocheck

// CSS and files import
import bannerFile from "../assets/Banner.png";
import '../styles/Banner.css';

/**
 * 
 * @returns Code for the Banner component (Background image, gradient and slogan)
 */
function Banner() {
    return (
      <section className="flex mainBanner">
        <img src={bannerFile} alt="Paysage en arrière plan" className="flex"></img>
        <div className="bannerSloganBackground flex"></div>
        <div className="bannerSlogan flex">Chez vous, partout et ailleurs</div>
      </section>
    );
}
export default Banner;