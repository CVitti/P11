// @ts-nocheck

// CSS import
import '../styles/globals.css';
import '../styles/App.css';

// React components import
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Custom components import
import Header from './Header';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import MainIndex from './MainIndex';

/**
 * 
 * @returns Components used to build the page
 */
function App() {
  return (
    <React.Fragment>
      {/* Header used for each page */}
      <Header />

      {/* Routing */}
      <BrowserRouter>
        <Routes>

          {/* Index Route */}
          <Route path="/" element={<MainIndex />}/>

          {/* Error 404 Route, used if no matching routes before, must be last route */}
          <Route path="*" element={<ErrorPage />}/> 

        </Routes>
      </BrowserRouter>

      {/* Footer used for each page*/}
      <Footer />
    </React.Fragment>    
  );
}

export default App;