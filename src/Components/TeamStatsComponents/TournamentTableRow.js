import React from "react";
import { useFetch } from "../../Hooks/useFetch";

const TournamentTableRow = ({ league, year, options, teamStanding }) => {
  const url = `https://v3.football.api-sports.io/standings?league=${league}&season=${year}`;
  const { data } = useFetch(url, options);

  if (data) {
    console.log(data.response[0].league.standings);
    const groups = data.response[0].league.standings;
    let groupIndex = 0;
    groups.forEach((group, index) => {
      group.forEach((team) => {
        if (team.team.id === teamStanding) {
          groupIndex = index;
        }
      });
    });
    const standings = data.response[0].league.standings[groupIndex];
    console.log(standings);

    console.log(groupIndex);

    return standings.map((item) => (
      <tr>
        <td>
          <img className="table-img" src={item.team.logo}></img>
        </td>
        <td>{item.all.played}</td>
        <td>{item.all.win}</td>
        <td>{item.all.draw}</td>
        <td>{item.all.lose}</td>
        <td>{item.points}</td>
        <td>{item.rank}</td>
      </tr>
    ));
  }

  return (
    <tr>
      <td></td>
    </tr>
  );
};

export default TournamentTableRow;
