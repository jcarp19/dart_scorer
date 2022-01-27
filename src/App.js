import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./components/Home"
import Footer from "./components/Footer";
import ZeroOne from "./components/ZeroOne";
import Cricket from "./components/Cricket";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <div className="logo-lg">
            <div className="logo-md">
              <div className="logo-sm">
                
              </div>
            </div>
          </div>
        
          <span className="logo-name">Dart Scorer</span>
        </div>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="zeroone" element={<ZeroOne />} />
            <Route path="cricket" element={<Cricket />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
