import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { setSelectedMovie } from "../redux/movies/moviesActions";
import MovieDetails from "./MovieDetails";
import "../styles/MovieCard.css";

const MovieCard = (props) => {
  const movie = useSelector((state) =>
    state?.movies.movies?.find((entity) => entity?.id === props?.id)
  );
  const selectedMovie = useSelector((state) => state?.movies?.selectedMovie);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setSelectedMovie(movie?.id));
  };

  return (
    <div>
      <Card className="m-3 bg-dark text-white movie-card" onClick={handleClick}>
        <Card.Img
          className="movie-card-image"
          src={movie?.posterurl}
          alt="Card image"
        />
        <Card.ImgOverlay className="movie-card-overlay">
          <Card.Body className="movie-card-text">
            <Card.Title className="mt-5">
              {movie?.title?.toUpperCase()}
            </Card.Title>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      {selectedMovie === movie?.id ? (
        <MovieDetails key={props?.id} id={props?.id} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MovieCard;
