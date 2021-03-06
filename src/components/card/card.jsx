import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="robot"
        src={`https://robohash.org/${props.robot.id}?set=set1&size=180x180`}
      ></img>
      <h3>{props.robot.name}</h3>
      <p>{props.robot.email}</p>
    </div>
  );
};
