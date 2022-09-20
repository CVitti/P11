// @ts-nocheck

// CSS import
import '../styles/Header.css';

// Custom components import
import Logo from './Logo';

// Variable initialization
const fakeLink = "#";

/**
 * 
 * @returns Code for the Header component (logo + nav menu)
 */
function Header() {
    return (
      <header className="flex flex--row">
        <Logo />
        <nav className="flex">
          <ul className="flex flex--row">
              <li>
                <a href={fakeLink} className="navLink">Accueil</a>
                </li>
              <li>
                <a href={fakeLink} className="navLink">A Propos</a>
              </li>
          </ul>
        </nav>
      </header>
    );
}
export default Header;