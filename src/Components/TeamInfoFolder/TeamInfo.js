import React from "react";

const TeamInfo = ({ teamDetails }) => {
  const { team, venue } = teamDetails;
  console.log(team);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <section className="team-info">
      <div className="team-card">
        <h2 className="team-title">{team.name}</h2>
        <hr></hr>
        <img className="team-logo" src={team.logo} alt={team.name}></img>
        <hr></hr>
        <div className="location">
          <p>País: {team.country}</p>
          <p>Ciudad: {venue.city}</p>
        </div>
        <hr></hr>

        <p>Fecha de fundación: {team.founded}</p>
        <hr></hr>

        <p>
          Estadio: {venue.name} ({numberWithCommas(venue.capacity)} personas)
        </p>
      </div>
    </section>
  );
};

export default TeamInfo;
