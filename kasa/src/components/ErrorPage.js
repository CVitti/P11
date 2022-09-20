// @ts-nocheck

// CSS import
import '../styles/ErrorPage.css';

// Variable initialization
const fakeLink = "#";

/**
 * 
 * @returns Code for the ErrorPage component (Error message and link to the index page)
 */
function ErrorPage() {    
    return (
        <main className="mainError">
            <p className='nbError'>404</p>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <a href={fakeLink} className="indexLink">Retourner sur la page d'accueil</a>          
        </main>
    );
}
export default ErrorPage;