// @ts-nocheck

// CSS import
import '../styles/Footer.css';

// Custom components import
import Logo from './Logo';

/**
 * 
 * @returns Code for the Footer component (logo + Copyrights text)
 */
function Footer() {
    return (
      <footer className="flex flex--column">
        <Logo />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
}
export default Footer;