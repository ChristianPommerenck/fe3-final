import React from "react";
import { Routes, Route } from 'react-router-dom';
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Layout from "./Layouts/Layout";

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
            </Route>  
          </Routes>
      </div>
  );
}

export default App;
