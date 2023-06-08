import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Gen6 = ({ type }) => {
  const [generation6, setgeneration6] = useState([]);
  const [rangeValue, setRangeValue] = useState(24);
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/6")
      .then((response) => response.json())
      .then((data) => setgeneration6(data))
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <section className="gen1">
      <div className="checkbox">
        {type.map((element) => (
          <div className="container1">
            <input
              type="radio"
              id={element.name}
              name="elementradio"
              checked={element.name === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={element.name}>{element.name}</label>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="filtre" onClick={() => setSelectedRadio("")}>
          Enlever les filtres
        </button>
        {generation6.length > 0 && (
          <input
            type="range"
            min="1"
            max={generation6.length}
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
        )}
      </div>

      <div className="container">
        {generation6
          .filter(
            (element) =>
              selectedRadio === "" ||
              element.apiTypes.some((type) => type.name === selectedRadio)
          )
          .slice(0, rangeValue)
          .map((pokemon) => (
            <div key={pokemon.id}>
              <Card
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.image}
                stats={pokemon.stats}
                type={pokemon.apiTypes}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Gen6;
