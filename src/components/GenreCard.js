import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { fetchMovies } from "../redux/movies/moviesActions";
import { setGenreCardsVisibility } from "../redux/genreCards/genreCardsActions";
import MovieCard from "./MovieCard";
import "../styles/GenreCard.css";

const GenreCard = (props) => {
  const { loading, movies, error } = useSelector((state) => state?.movies);
  const genreVisibility = useSelector(
    (state) => state?.genreCards?.genreCardsVisibility
  );
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (movies?.length === 0) {
      dispatch(fetchMovies());
    }
    dispatch(setGenreCardsVisibility(false));
    setDisplay(!display);
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
        <div className="genre-card-parent">
          <Card
            className="m-3 bg-dark text-white genre-card"
            onClick={handleClick}
          >
            <div className="genre-card-image-parent">
              <Card.Img
                className="genre-card-image"
                src={
                  require(`../images/genreImages/${props?.source.toLowerCase()}.jpg`)
                    .default
                }
                alt="Card image"
              />
            </div>
            <Card.ImgOverlay>
              <Card.Body>
                <Card.Title className="mt-5" className="genre-card-title">
                  {props?.source.toUpperCase()}
                </Card.Title>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </div>
      ) : null}
      {display ? (
        <div className="mt-3">
          <h3>{props?.source} Movies</h3>
        </div>
      ) : null}
      <div className="movie-cards">
        {display
          ? movies
              ?.filter((movie) => movie.genres.includes(props?.source))
              ?.map((moviee) => <MovieCard key={moviee.id} id={moviee?.id} />)
          : null}
      </div>
    </div>
  );
};

export default GenreCard;
