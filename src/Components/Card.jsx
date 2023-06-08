import React, { useState } from "react";

const Card = ({ id, name, img, stats, type }) => {
  const [isActive, setIsActive] = useState(false);
  const handleclick = () => {
    setIsActive(!isActive);
  };

  return (
    <figure className="contentcard">
      <img className="poke" src={img} alt="" />
      <figcaption>
        {id}. {name}
      </figcaption>
      <div className="type">
        {type.map((type) => (
          <img key={type.name} src={type.image} alt={type.name} />
        ))}
      </div>
      <button className="buttonstat" onClick={handleclick}>
        Stats
      </button>
      {isActive === true && (
        <div className="stats">
          <div>
            <p>
              💗 {stats.HP} 💥 {stats.attack}
            </p>
            <p>
              🛡 {stats.defense} 💨{stats.speed}
            </p>
          </div>
        </div>
      )}
    </figure>
  );
};

export default Card;
