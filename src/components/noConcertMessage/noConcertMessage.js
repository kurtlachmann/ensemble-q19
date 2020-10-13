import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NoConcertMessage extends React.Component {
	render() {
		const textStyle = {
			textTransform: "uppercase",
			letterSpacing: "0.2rem",
			fontSize: "1.2rem",
			color: "#fff5",
			textAlign: "center"
		};
		return (
			<Container>
				<Row>
					<Col className="my-5">
						<div style={textStyle}>
							Keine kommenden Konzerte
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default NoConcertMessage
