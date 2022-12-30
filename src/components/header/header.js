import styled from "@emotion/styled";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import portrait from "./portrait.jpeg";

const Portrait = styled(Image)`
  margin: 2rem;
  width: 18rem;
`;

function Title() {
  const H1 = styled.h1`
    color: white;
    margin: 1rem auto;
  `;
  return <H1>Ensemble Q19</H1>;
}

function FacebookLink() {
  const Link = styled.a`
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
    padding: 0.5rem;
    &:hover {
      color: white;
    }
  `;
  return (
    <Link href="https://www.facebook.com/ensembleq19">
      <FontAwesomeIcon icon={faFacebookF} />
    </Link>
  );
}

function InstagramLink() {
  const Link = styled.a`
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
    padding: 0.5rem;
    &:hover {
      color: white;
    }
  `;
  return (
    <Link href="https://instagram.com/ensemble_q19">
      <FontAwesomeIcon icon={faInstagram} />
    </Link>
  );
}

function Navigation(props) {
  const StyledNavLink = styled(NavLink)`
    color: gray;
    font-size: 1.2rem;
    &.active,
    &.active:hover {
      border-bottom: 0.3rem solid white;
      color: white;
    }
    &:hover {
      color: white;
      text-decoration: none;
    }
  `;
  return (
    <StyledNavLink exact to={props.to} activeClassName="active">
      {props.children}
    </StyledNavLink>
  );
}

function Header() {
  return (
    <header>
      <Container className="d-flex justify-content-center">
        <Row className="mb-5">
          <Col lg className="d-flex justify-content-center">
            <Portrait src={portrait} roundedCircle />
          </Col>
          <Col lg className="d-flex flex-column justify-content-center">
            <Title />
            <Row className="d-flex justify-content-center mt-1">
              <FacebookLink />
              <InstagramLink />
            </Row>
            <Row className="d-flex justify-content-around mt-3 mx-4">
              <Navigation to="/">Konzerte</Navigation>
              <Navigation to="/media">Medien</Navigation>
              <Navigation to="/contact">Kontakt</Navigation>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
