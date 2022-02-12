import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import Message from "../Message";
import TournamentTableRow from "./TournamentTableRow";

const StatsInfo = ({ id, league, year, options }) => {
  const endpoint = `https://v3.football.api-sports.io/standings?league=${league}&team=${id}&season=${year}`;
  const { data } = useFetch(endpoint, options);
  console.log(data);

  if (data && data.results > 0) {
    console.log(data.response[0].league.standings[0][0].team.id);
    const teamStanding = data.response[0].league.standings[0][0].team.id;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Eq.</th>
              <th>PJ</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>Pts</th>
              <th>°</th>
            </tr>
          </thead>
          <tbody>
            <TournamentTableRow
              league={league}
              year={year}
              options={options}
              teamStanding={teamStanding}
            />
          </tbody>
        </table>
      </div>
    );
  } else {
    return <Message msg="Datos no disponibles" bgColor="#dc3545" />;
  }
};

export default StatsInfo;
