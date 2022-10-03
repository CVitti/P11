// @ts-nocheck

// CSS import
import '../styles/Header.css';

// React/React-router components import
import { NavLink } from 'react-router-dom';

// Custom components import
import Logo from './Logo';

// Variables initialization
let activeClassName = "navLinkActive";
let classicClassName = "navLink";

/**
 * 
 * @returns Code for the Header component (logo + nav menu)
 */
function Header() {
  return (
    <header className="flex flex--row">
      <Logo position="Header"/>
      <nav className="flex flex--row">
        <NavLink 
          to="../"
          end
          className={({ isActive }) =>
          isActive ? activeClassName : classicClassName
        }>
          Accueil
        </NavLink>
        <NavLink 
          to="../About"
          className={({ isActive }) =>
          isActive ? activeClassName : classicClassName
        }>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;