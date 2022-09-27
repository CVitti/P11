// @ts-nocheck

// CSS import
import '../styles/globals.css';
import '../styles/App.css';

// React/React-router components import
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Custom components import
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorPage from './ErrorPage';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import DetailsPage from './DetailsPage';

/**
 * 
 * @returns Components used to build the page
 */
function App() {
  return (
    <React.Fragment>

      {/* Routing */}
      <BrowserRouter>
        <Routes>         

          {/* Index Route */}
          <Route path="/" element={<React.Fragment> <Header /><MainPage /> </React.Fragment>}/>

          {/* About Route */}
          <Route path="/About" element={<React.Fragment> <Header /><AboutPage /> </React.Fragment>}/>

          {/* Logement Details Page Route */}
          <Route path="/DetailsLogements/:currentId" element={<React.Fragment> <Header /><DetailsPage /> </React.Fragment>}/>

          {/* Error 404 Route, used if no matching routes before, must be last route */}
          <Route path="*" element={<React.Fragment> <Header /><ErrorPage /> </React.Fragment>}/> 

        </Routes>
      </BrowserRouter>

      {/* Footer used for each page*/}
      <Footer />

    </React.Fragment>    
  );
}
export default App;