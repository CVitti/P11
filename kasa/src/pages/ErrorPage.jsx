// @ts-nocheck

// CSS import
import '../styles/ErrorPage.css';

// React/React-router components import
import { Link } from 'react-router-dom';

/**
 * 
 * @returns Code for the ErrorPage component (Error message and link to the index page)
 */
function ErrorPage() {    
    return (
        <main className="flex flex--column mainError">
            <p className='nbError'>404</p>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <Link to="/" className="indexLink">Retourner sur la page d'accueil</Link>      
        </main>
    );
}
export default ErrorPage;