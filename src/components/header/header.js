import React from 'react';
import { NavLink } from "react-router-dom";
import style from './header.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import portrait from './portrait.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component {
	render() {
		return (
			<header>
				<Container className="d-flex justify-content-center">
					<Row className="mb-5">
						<Col lg className="d-flex justify-content-center">
							<Image src={portrait} roundedCircle className={style.portrait} />
						</Col>
						<Col lg className="d-flex flex-column justify-content-center">
							<h1 className={`${style.title} text-center`}>Ensemble Q19</h1>
							<Row className="d-flex justify-content-center mt-1">
								<a className={style["facebook-icon"]} href="https://www.facebook.com/ensembleq19">
									<FontAwesomeIcon icon={faFacebookF} />
								</a>
								<a className={style["facebook-icon"]} href="https://instagram.com/ensemble_q19">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</Row>
							<Row className="d-flex justify-content-around mt-3 mx-4">
								<NavLink exact to="/" activeClassName={style['navlink-active']} className={style['navlink']}>Konzerte</NavLink>
								<NavLink to="/media" activeClassName={style['navlink-active']} className={style['navlink']}>Medien</NavLink>
								<NavLink to="/contact" activeClassName={style['navlink-active']} className={style['navlink']}>Kontakt</NavLink>
							</Row>
						</Col>
					</Row>
				</Container>
			</header>
		);
	}
}

export default Header
