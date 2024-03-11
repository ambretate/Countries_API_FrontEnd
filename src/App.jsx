import React from "react";
import Nav from "./components/Nav.jsx"
import Home from "./screens/Home.jsx"
import Countries from "./screens/Countries.jsx"
import CountriesCreate from "./screens/CountriesCreate.jsx"
import CountriesDetail from "./screens/CountriesDetail.jsx"
import CountriesEdit from "./screens/CountriesEdit.jsx"
import { Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/add-country" element={<CountriesCreate />} />
        <Route path="/countries/:id" element={<CountriesDetail />} />
        <Route path="/countries/:id/edit" element={<CountriesEdit />} />
      </Routes>
    </div>
  );
}

export default App;
