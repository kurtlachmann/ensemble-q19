import styled from "@emotion/styled";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function getDay(dateString) {
  const date = new Date(dateString);
  switch (date.getDay()) {
    case 0:
      return "Sonntag";
    case 1:
      return "Montag";
    case 2:
      return "Dienstag";
    case 3:
      return "Mittwoch";
    case 4:
      return "Donnerstag";
    case 5:
      return "Freitag";
    case 6:
      return "Samstag";
		default:
			return "";  // This should never happen
  }
}

function formatDate(dateString) {
  let year, month, day;
  [year, month, day] = dateString.split("-");
  return `${getDay(dateString)}, ${day}.${month}.${year}`;
}

const Title = styled.div`
	font-size: 1.5rem;
	color: white;
	margin: 1rem 0;
`;

const Subtitle = styled.div`
	font-size: 1.2rem;
	color: #fff5;
	text-transform: uppercase;
	margin: 1rem 0;
`;

const Text = styled.div`
	margin-bottom: 1.5rem;
`;

function Concert(props) {
  // An empty column that disappears on small screens
  const spacerCol = <Col className="col-1 d-none d-md-block"></Col>;

  // Create the image containers only if this concert has an image assigned
  let image_side = null;
  let image_below = null;
  if (props.data.image) {
    image_side = (
      <Col className="col-4 d-none d-lg-block">
        <img
          className="rounded-lg"
          src={props.data.image}
          width="100%"
          alt=""
        ></img>
      </Col>
    );
    image_below = (
      <Col className="d-block d-lg-none">
        <img
          className="rounded-lg"
          src={props.data.image}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          alt=""
        ></img>
      </Col>
    );
  }

  let concert_text = props.data.text.map((data, index) => {
    return <p key={index}>{data}</p>;
  });

  let dateTime = formatDate(props.data.date);
  if (props.data.time) {
    dateTime += `, ${props.data.time} Uhr`;
  }

  return (
    <Container className="mb-5">
      <Row>
        {spacerCol}
        <Col>
          <Title>{props.data.title}</Title>
          <Subtitle>{props.data.subtitle}</Subtitle>
          <Text>{concert_text}</Text>

          <Container className="d-flex">
            <div className="mx-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <p>{props.data.location}</p>
          </Container>

          <Container className="d-flex">
            <div className="mx-3">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <p>{dateTime}</p>
          </Container>
        </Col>
        {image_side}
        {spacerCol}
      </Row>
      <Row>
        {spacerCol}
        {image_below}
        {spacerCol}
      </Row>
    </Container>
  );
}

export default Concert;
