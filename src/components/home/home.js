import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Concert from "../concert/concert";
import NoConcertMessage from "../noConcertMessage/noConcertMessage";
import concertData from "./concerts.json";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const isDateInPast = (d) => {
  let now = new Date();
  now.setHours(0, 0, 0, 0);
  return now >= new Date(d);
};

const StyledButton = styled.button`
  background: none;
  border: none;
  color: #666;
	margin: 0 10px;
  &:hover {
    color: #fff;
  }
	&:focus {
		outline: none;
	}
	&:focus-visible {
		outline-color: #fff;
		outline-style: solid;
		border-radius: 5px;
	}
  &.active {
    color: #fff;
		font-weight: bold;
  }
`;

function Home() {
  const [showPastConcerts, setShowPastConcerts] = useState(false);
  const concerts = showPastConcerts ? <PastConcerts /> : <UpcomingConcerts />;
  return (
    <>
      <Col></Col>
      <Col>
        <Container className="mb-5 text-center">
          <StyledButton
            className={showPastConcerts ? "" : "active"}
            onClick={() => setShowPastConcerts(false)}
          >
            Aktuell
          </StyledButton>
          <StyledButton
            className={showPastConcerts ? "active" : ""}
            onClick={() => setShowPastConcerts(true)}
          >
            Vergangene Konzerte
          </StyledButton>
        </Container>
        {concerts}
      </Col>
      <Col></Col>
    </>
  );
}

function UpcomingConcerts() {
  const upcomingConcertData = concertData.filter((e) => !isDateInPast(e.date));
  if (upcomingConcertData.length > 0) {
    return upcomingConcertData.map((data, index) => (
      <Concert key={index} data={data} />
    ));
  } else {
    return <NoConcertMessage></NoConcertMessage>;
  }
}

function PastConcerts() {
  const pastConcertData = concertData.filter((e) => isDateInPast(e.date));
  return pastConcertData.map((data, index) => (
    <Concert key={index} data={data} />
  ));
}

export default Home;
