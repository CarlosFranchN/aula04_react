import React from "react";
import './style.css'
const Card = ({gato}) => {
  return <div className="card">
    <div className="card_img">
        <img src={gato.url} alt="Gatinhooo" />
    </div>
    <div className="card_info">
        <h2>{gato.id}</h2>
    </div>
  </div>;
};

export default Card;
