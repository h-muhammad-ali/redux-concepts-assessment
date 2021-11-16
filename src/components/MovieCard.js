import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Card } from "react-bootstrap";
import MovieDetails from "./MovieDetails";

const MovieCard = (props) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const movie = useSelector((state) =>
    state?.movies.movies?.find((entity) => entity.id === props?.id)
  );
  const handleClick = () => {
    setDisplayDetails(true);
  };
  const cardStyles = {
    width: "15rem",
    height: "20rem",
    borderRadius: "10%",
    flex: 1,
    cursor: "pointer",
  };

  const cardImgStyles = {
    width: "15rem",
    height: "20rem",
    borderRadius: "10%",
  };

  const cardTitleStyles = { textAlign: "center" };
  return (
    <div>
      <Card
        style={cardStyles}
        className="m-3 bg-dark text-white movieCard"
        onClick={handleClick}
      >
        <Card.Img
          style={cardImgStyles}
          src={movie.posterurl}
          alt="Card image"
        />
        <Card.ImgOverlay
          style={{ borderRadius: "10%", width: "15rem", height: "20rem" }} //I have to add the styles for overlay here cuz otherwise they are not working working.
          className="movieCardOverlay"
        >
          <Card.Body className="movieCardText">
            <Card.Title className="mt-5" style={cardTitleStyles}>
              {movie.title.toUpperCase()}
            </Card.Title>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      {displayDetails && (
        <MovieDetails
          key={props?.id}
          setDisplayDetails={setDisplayDetails}
          id={props?.id}
        />
      )}
    </div>
  );
};

export default MovieCard;
