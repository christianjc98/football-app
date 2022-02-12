import "./App.css";
import Form from "./Components/FormComponents/Form";
import React, { useState, useEffect } from "react";
import TeamDetails from "./Components/TeamDetails";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [league, setLeague] = useState(null);
  const [year, setYear] = useState(null);

  const handleChange = (e) => {
    setLeague(e.target.value);
    setYear(null);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleSearch = (data) => {
    setSearch(data);
    setLeague(null);
    setYear(null);
  };

  const handleLoading = (valor) => {
    setLoading(valor);
  };

  return (
    <div className="main-wrapper">
      <Header />
      <h1 className="main-title">Buscador Futbol Mundial</h1>
      <Form handleSearch={handleSearch} />

      {loading && <Loader />}
      <div className="footer-to-bottom"></div>
      {search && (
        <TeamDetails
          search={search}
          handleLoading={handleLoading}
          league={league}
          year={year}
          handleChange={handleChange}
          handleYear={handleYear}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
