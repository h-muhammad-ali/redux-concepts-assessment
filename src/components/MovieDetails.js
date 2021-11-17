import React from "react";
import {
  Modal,
  Container,
  Row,
  Col,
  Accordion,
  Image,
  ListGroup,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMovie } from "../redux/movies/moviesActions";
import Moment from "moment";

const MovieDetails = (props) => {
  const movie = useSelector((state) =>
    state?.movies.movies?.find((entity) => entity?.id === props?.id)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        show={true}
        size="lg"
        onHide={() => {
          dispatch(setSelectedMovie(0));
        }}
        aria-labelledby={movie?.id}
      >
        <Modal.Header closeButton>
          <Modal.Title id={movie?.id}>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h5>Release Date</h5>
                <Row className="justify-content-center">
                  {Moment(movie?.releaseDate).format("MMMM DD, YYYY")}
                </Row>
                <Row>
                  <h5>Genres</h5>
                  <ListGroup variant="flush">
                    {movie?.genres?.map((element, id) => (
                      <ListGroup.Item key={id}>{element}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Row>
                <h5>IMDb Ratings</h5>
                <Row className="justify-content-center">
                  {movie?.imdbRating || "--"}/10.0
                </Row>
                <h5>Duration</h5>
                <Row className="justify-content-center">
                  {movie.duration
                    ? movie?.duration.match(/\d+/) + " minutes"
                    : "Not available"}
                </Row>

                <Row>
                  <h5>Cast</h5>
                  <ListGroup variant="flush">
                    {movie?.actors?.map((element, id) => (
                      <ListGroup.Item key={id}>{element}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Row>
              </Col>
              <Col className="d-flex justify-content-center">
                <Image src={movie?.posterurl} rounded />
              </Col>
            </Row>
            <Row className="pt-5">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Synopsis</Accordion.Header>
                  <Accordion.Body>{movie?.storyline}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieDetails;
