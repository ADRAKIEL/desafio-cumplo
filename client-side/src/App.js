import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScreenSplash from './components/reusable/ScreenSplash';
import Candidates from './components/pages/Candidates';
import './App.css';

// Autenticacion
function App() {
  return (
    <Router>
      <div className="flex">
        <ToastContainer />
        <div className="content w-100">
          <Routes>
            <Route path="/" exact={true} element={<ScreenSplash />} />
            <Route path="/candidates" exact={true} element={<Candidates />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
