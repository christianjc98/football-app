import { useFetch } from "../../Hooks/useFetch";
import React from "react";

const Fixture = ({ id, options }) => {
  const url = `https://v3.football.api-sports.io/fixtures?team=${id}&next=5`;
  const { data } = useFetch(url, options);

  if (data) {
    console.log(data);
    const fixtures = data.response;

    return (
      <>
        <h2>Proximos Partidos</h2>
        <div className="fixture-container">
          {fixtures.map((item) => (
            <>
              <div className="fixture-card" key={item.fixture.id}>
                <div className="fixture-teams">
                  <div className="home">
                    <img
                      className="fixture-logo"
                      src={item.teams.home.logo}
                    ></img>
                    <h3 className="fixture-team-title">
                      {item.teams.home.name}
                    </h3>
                  </div>
                  <div className="away">
                    <img
                      className="fixture-logo"
                      src={item.teams.away.logo}
                    ></img>
                    <h3 className="fixture-team-title">
                      {item.teams.away.name}
                    </h3>
                  </div>
                </div>
                <div className="fixture-info">
                  <p>
                    {item.league.name}: {item.league.round}
                  </p>
                  <div className="date">
                    <p>{item.fixture.date.slice(0, 10)}</p>
                    <p>{item.fixture.date.slice(11, 16)}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  } else {
    return <p>Hola</p>;
  }
};
export default Fixture;
