import React, { useState } from "react";

import { useFetch } from "../../Hooks/useFetch";
import Buttons from "./Buttons";
import ButtonsYears from "./ButtonsYears";
import StatsInfo from "./StatsInfo";

const TeamStats = ({ id, options, league, year, handleYear, handleChange }) => {
  let url = `https://v3.football.api-sports.io/leagues?team=${id}`;
  const { data, error, loading } = useFetch(url, options);

  if (!data) return null;

  let ligas = data.response;

  return (
    <>
      <section className="team-stats">
        <h2 className="stats-title">Estadisticas</h2>
        {ligas && <Buttons ligas={ligas} handleChange={handleChange} />}
        {league && (
          <ButtonsYears
            handleYear={handleYear}
            league={league}
            options={options}
            id={id}
          />
        )}
        {year && (
          <StatsInfo league={league} year={year} options={options} id={id} />
        )}
      </section>
    </>
  );
};

export default TeamStats;
