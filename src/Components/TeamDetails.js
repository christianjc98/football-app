import { useFetch } from "../Hooks/useFetch";
import React, { useState, useEffect } from "react";
import TeamInfo from "./TeamInfoFolder/TeamInfo";
import TeamStats from "./TeamStatsComponents/TeamStats";
import Message from "./Message";
import Fixture from "./FixturesComponents/Fixtures";

const TeamDetails = ({
  search,
  handleLoading,
  league,
  year,
  handleChange,
  handleYear,
}) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "fd2643168330d8585ca4923a863a2a16",
    },
  };
  const url = `https://v3.football.api-sports.io/teams?name=${search.equipo}`;
  const { data, error, loading } = useFetch(url, options);

  useEffect(() => {
    handleLoading(loading);
  }, [loading]);

  if (!data) return null;
  if (error)
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );

  const emptyResponse = data.response.length;
  if (emptyResponse > 0) {
    let teamDetails = data.response[0];
    let id = teamDetails.team.id;

    return (
      <>
        <div className="break-point-container">
          {<TeamInfo teamDetails={teamDetails} />}
          <section className="fixtures">
            {id && <Fixture id={id} options={options} />}
          </section>
        </div>
        {
          <TeamStats
            id={id}
            options={options}
            league={league}
            year={year}
            handleChange={handleChange}
            handleYear={handleYear}
          />
        }
      </>
    );
  } else {
    return <Message msg="No se encontro este equipo" bgColor="#dc3545" />;
  }
};

export default TeamDetails;
