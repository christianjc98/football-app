import React from "react";
import { useFetch } from "../../Hooks/useFetch";

const ButtonsYears = ({ handleYear, league, options, id }) => {
  let url = `https://v3.football.api-sports.io/leagues?id=${league}&team=${id}`;
  const { data } = useFetch(url, options);
  console.log(data);

  if (!data) {
    return null;
  }

  if (data) {
    let seasons = data.response[0].seasons;
    console.log(seasons);

    return (
      <>
        <select name="Años" id="Años" onChange={handleYear}>
          <option value="">Selecciona un torneo</option>
          {seasons.map((item, index) => (
            <option value={item.year} key={index}>
              {item.year}
            </option>
          ))}
        </select>
      </>
    );
  }
};

export default ButtonsYears;
