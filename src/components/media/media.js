import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const songs = [
	{
		"title": "Jubilate Deo",
		"composer": "Schütz",
		"url": "/audio/jubilate_deo.mp3"
	},
	{
		"title": "Ubi Caritas",
		"composer": "Gjeilo",
		"url": "/audio/ubi_caritas.mp3"
	},
	{
		"title": "Erquicke mich mit deinem Licht",
		"composer": "Becker",
		"url": "/audio/erquicke_mich.mp3"
	},
	{
		"title": "Salvum Fac Regem",
		"composer": "Hauptmann",
		"url": "/audio/salvum_fac_regem.mp3"
	},
	{
		"title": "Nice work if you can get it",
		"composer": "Gershwin",
		"url": "/audio/nice_work.mp3"
	}
]

const images = [
	"/img/emmauskirche-01.jpg",
	"/img/emmauskirche-02.jpg",
	"/img/dormi-bene.jpg",
	"/img/dormi-bene-Himmel-1920x1200.jpg",
]


function AudioBlock(props) {
	let style = {
		fontWeight: "normal",
	};
	return (
		<Container className="mb-5">
			<Row>
				<Col className="d-flex justify-content-center" style={style}>
					{props.song.title} ({props.song.composer})
				</Col>
			</Row>
			<Row>
				<Col className="d-flex justify-content-center">
					<audio controls>
						<source src={props.song.url} type="audio/mp3"/>
					</audio>
				</Col>
			</Row>
		</Container>
	)
}


function Image(props) {
	return (
		<img className="rounded-lg my-3" src={props.src} width="100%" alt=""></img>
	);
}


class Media extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						{songs.map((value, index) => {
							return <AudioBlock song={value} key={index} />
						})}
					</Col>
				</Row>
				<Row>
					<Col>
						{images.map((value, index) => {
							return <Image key={index} src={value} />;
						})}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Media
