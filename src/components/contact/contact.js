import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import style from './contact.module.css';
const facebook_url = "facebook.com/ensembleq19";
const instagram_url = "instagram.com/ensemble_q19";


function Channel(props) {
	return (
		<Row className="mb-1">
			<Col className="col-1 ml-5">
				<FontAwesomeIcon icon={props.icon} />
			</Col>
			<Col>
				{props.children}
			</Col>
		</Row>
	)
}


class Contact extends React.Component {
	render() {
		return (
			<Container style={{width: "25rem"}}>
				<Row className="mb-3">
					<Col style={{textAlign: "center"}}>
						Sie können uns über folgende Kanäle erreichen:
					</Col>
				</Row>

				<Channel icon={faFacebookF}>
					<a className={style.link} href={"https://" + facebook_url}>{facebook_url}</a>
				</Channel>

				<Channel icon={faInstagram}>
					<a className={style.link} href={"https://" + instagram_url}>{instagram_url}</a>
				</Channel>

				<Channel icon={faEnvelope}>
					kontakt
					<FontAwesomeIcon icon={faAt} style={{margin: "0 2px", fontSize: "0.9rem"}} />
					ensemble-q19.de
				</Channel>
			</Container>
		);
	}
}

export default Contact
