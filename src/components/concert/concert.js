import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './concert.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function getDay(dateString) {
	const date = new Date(dateString);
	switch (date.getDay()) {
		case 0: return "Sonntag";
		case 1: return "Montag";
		case 2: return "Dienstag";
		case 3: return "Mittwoch";
		case 4: return "Donnerstag";
		case 5: return "Freitag";
		case 6: return "Samstag";
	}
}

function formatDate(dateString) {
	let year, month, day;
	[year, month, day] = dateString.split('-');
	return `${getDay(dateString)}, ${day}.${month}.${year}`
}

class Concert extends React.Component {

	render() {
		// An empty column that disappears on small screens
		const spacerCol = <Col className="col-1 d-none d-md-block"></Col>

		// Create the image containers only if this concert has an image assigned
		let image_side = null;
		let image_below = null;
		if (this.props.data.image) {
			image_side = (
				<Col className="col-4 d-none d-lg-block">
					<img className="rounded-lg" src={this.props.data.image} width="100%" alt=""></img>
				</Col>
			)
			image_below = (
				<Col className="d-block d-lg-none">
					<img className="rounded-lg" src={this.props.data.image} width="100%" height="200rem" style={{objectFit: "cover"}} alt=""></img>
				</Col>
			)
		}

		return (
			<Container className="mb-5">
				<Row>
					{spacerCol}
					<Col>
						<div className={style.title}>{this.props.data.title}</div>
						<div className={style.subtitle}>{this.props.data.subtitle}</div>
						<div className={style.text}>{this.props.data.text}</div>

						<Container className="d-flex">
							<div className="mx-3">
								<FontAwesomeIcon icon={faMapMarkerAlt} />
							</div>
							<p>{this.props.data.location}</p>
						</Container>

						<Container className="d-flex">
							<div className="mx-3">
								<FontAwesomeIcon icon={faClock} />
							</div>
							<p>{formatDate(this.props.data.date)}, {this.props.data.time} Uhr</p>
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
}

export default Concert
