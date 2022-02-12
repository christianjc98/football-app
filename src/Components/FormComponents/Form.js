import React, { useState, useEffect } from "react";

const Form = ({ handleSearch }) => {
  const initialForm = {
    equipo: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.equipo) {
      alert("Porfavor introduzca un equipo");
    }
    handleSearch(form);
    setForm(initialForm);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <form>
        <label htmlFor="equipo">Equipo de futbol</label>
        <input
          type="text"
          placeholder="Introduzca un equipo (Ej. Chelsea)"
          name="equipo"
          id="equipo"
          onChange={handleChange}
          value={form.equipo}
        ></input>
        <input type="submit" value="Buscar" onClick={handleSubmit}></input>
      </form>
    </div>
  );
};

export default Form;
