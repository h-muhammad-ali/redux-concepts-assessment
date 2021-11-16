import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { fetchMovies } from "../redux/movies/moviesActions";
import { setGenreCardsVisibility } from "../redux/genreCards/genreCardsActions";
import MovieCard from "./MovieCard";
import "../App.css";

const GenreCard = (props) => {
  const { loading, movies, error } = useSelector((state) => state?.movies);
  const genreVisibility = useSelector(
    (state) => state?.genreCards.genreCardsVisibility
  );
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (movies?.length == 0) {
      dispatch(fetchMovies());
    }
    dispatch(setGenreCardsVisibility(false));
    setDisplay(!display);
  };
  const cardStyles = {
    width: "12rem",
    height: "15rem",
    borderRadius: "10%",
    flex: 1,
    cursor: "pointer",
  };

  const cardImgStyles = {
    width: "12rem",
    height: "15rem",
    borderRadius: "10%",
    filter: "blur(4px)",
  };

  const cardTitleStyles = { textAlign: "center" };
  const movieCardsStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  if (loading) {
    return null;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      {genreVisibility ? (
        <Card
          style={cardStyles}
          className="m-3 bg-dark text-white genreCard"
          onClick={handleClick}
        >
          <Card.Img
            style={cardImgStyles}
            src={
              require(`../images/genreImages/${props?.source.toLowerCase()}.jpg`)
                .default
            }
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title className="mt-5" style={cardTitleStyles}>
                {props?.source.toUpperCase()}
              </Card.Title>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      ) : null}
      {display ? <div className="mt-3"><h3>{props?.source} Movies</h3></div>: null}
      <div style={movieCardsStyles}>
        {display
          ? movies
              ?.filter((movie) => movie.genres.includes(props?.source))
              .map((moviee) => <MovieCard key={moviee.id} id={moviee.id} />)
          : null}
      </div>
    </div>
  );
};

export default GenreCard;
