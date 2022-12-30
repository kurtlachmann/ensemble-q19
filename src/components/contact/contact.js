import styled from "@emotion/styled";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const facebook_url = "facebook.com/ensembleq19";
const instagram_url = "instagram.com/ensemble_q19";

function Channel(props) {
  return (
    <Row className="mb-1">
      <Col className="col-1 ml-5">
        <FontAwesomeIcon icon={props.icon} />
      </Col>
      <Col>{props.children}</Col>
    </Row>
  );
}

const Link = styled.a`
  &, &:visited {
    color: #61cc9a;
  }

  &:hover {
    color: #2cff9d;
  }

  &:active {
    color: #70ffbc;
  }
`

function Contact() {
  return (
    <Container style={{ width: "25rem" }}>
      <Row className="mb-3">
        <Col style={{ textAlign: "center" }}>
          Sie können uns über folgende Kanäle erreichen:
        </Col>
      </Row>

      <Channel icon={faFacebookF}>
        <Link href={"https://" + facebook_url}>
          {facebook_url}
        </Link>
      </Channel>

      <Channel icon={faInstagram}>
        <Link href={"https://" + instagram_url}>
          {instagram_url}
        </Link>
      </Channel>

      <Channel icon={faEnvelope}>
        kontakt
        <FontAwesomeIcon
          icon={faAt}
          style={{ margin: "0 2px", fontSize: "0.9rem" }}
        />
        ensemble-q19.de
      </Channel>
    </Container>
  );
}

export default Contact;
