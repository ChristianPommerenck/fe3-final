import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  return (
      <div className="App">
        <Navbar/>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/detail/:id" element={<Detail />} />
           <Route path="/favs" element={<Favs />} />
           <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
          </Routes>
        <Footer/>        
      </div>
  );
}

export default App;
