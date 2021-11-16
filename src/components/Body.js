import React from "react";
import GenreCard from "./GenreCard";

const Body = () => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      {[
        "Action",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "History",
        "Horror",
        "Musical",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "Western",
      ].map((source, idx) => (
        <GenreCard key={idx} source={source} id={idx} />
      ))}
    </div>
  );
};

export default Body;
