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
import { useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";
import Moment from "moment";

const MovieDetails = (props) => {
  const [show, setShow] = useState(true);
  const movie = useSelector((state) =>
    state?.movies.movies?.find((entity) => entity.id === props?.id)
  );
  return (
    <div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          props?.setDisplayDetails(false);
        }}
        dialogClassName="my-modal"
        aria-labelledby="title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="title">{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h5>Release Date</h5>
                <Row className="justify-content-center">
                  {Moment(movie.releaseDate).format("MMMM DD, YYYY")}
                </Row>
                <Row>
                  <h5>Genres</h5>
                  <ListGroup variant="flush">
                    {movie.genres.map((element) => (
                      <ListGroup.Item>{element}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Row>
                <h5>IMDb Ratings</h5>
                <Row className="justify-content-center">
                  {movie.imdbRating || "--"}/10.0
                </Row>
                <h5>Duration</h5>
                <Row className="justify-content-center">
                  {movie.duration
                    ? movie.duration.match(/\d+/) + " minutes"
                    : "Not available"}
                </Row>

                <Row>
                  <h5>Cast</h5>
                  <ListGroup variant="flush">
                    {movie.actors.map((element) => (
                      <ListGroup.Item>{element}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Row>
              </Col>
              <Col className="d-flex justify-content-center">
                <Image src={movie.posterurl} rounded />
              </Col>
            </Row>
            <Row className="pt-5">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Synopsis</Accordion.Header>
                  <Accordion.Body>{movie.storyline}</Accordion.Body>
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
