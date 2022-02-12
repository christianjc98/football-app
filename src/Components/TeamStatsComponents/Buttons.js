import React from "react";

const Buttons = ({ ligas, handleChange, league }) => {
  return (
    <>
      <select name="Ligas" id="Ligas" onChange={handleChange}>
        <option value="">Selecciona un torneo</option>
        {ligas &&
          !league &&
          ligas.map((item) => (
            <option value={item.league.id} key={item.league.id}>
              {item.league.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default Buttons;
