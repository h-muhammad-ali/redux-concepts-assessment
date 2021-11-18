import React from "react";
import GenreCard from "./GenreCard";
import { genres } from "../data/genres";
import "../styles/Body.css";

const Body = () => {
  return (
    <div className="main-body-component">
      {genres?.map((source, idx) => (
        <GenreCard key={idx} source={source} id={idx} />
      ))}
    </div>
  );
};

export default Body;
