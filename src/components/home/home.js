import React from 'react';
import Concert from '../concert/concert';
import NoConcertMessage from '../noConcertMessage/noConcertMessage';
import concertData from './concerts.json';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
	render() {
		let concerts = {};
		if (concertData.length > 0) {
			concerts = concertData.map((data, index) => {
				return <Concert key={index} data={data} />
			})
		} else {
			concerts = <NoConcertMessage></NoConcertMessage>
		}
		return (
			<>
			<Col></Col>
			<Col>
				{concerts}
			</Col>
			<Col></Col>
			</>
		);
	}
}

export default Home
