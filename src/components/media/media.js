import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const songs = [
	{
		"title": "Ubi Caritas",
		"composer": "Gjeilo",
		"url": "https://docs.google.com/uc?export=download&id=1eUcIUP5qqIFSSFrverAHvCX9sYch1kJJ"
	},
	{
		"title": "Erquicke mich mit deinem Licht",
		"composer": "Becker",
		"url": "https://drive.google.com/uc?export=download&id=1l6CBAn0wHMzdmLyEhtKKgvBS3Q8Appxv"
	},
	{
		"title": "Salvum Fac Regem",
		"composer": "Hauptmann",
		"url": "https://drive.google.com/uc?export=download&id=1Q_-apn32-7BMiOhjDAFUf0zXV4AlHauQ"
	},
	{
		"title": "Nice work if you can get it",
		"composer": "Gershwin",
		"url": "https://drive.google.com/uc?export=download&id=1K8ZLXEwhHuFi5Hwx7oPLBm8ufUF69anM"
	}
]

const images = [
	"/img/emmauskirche-01.jpg",
	"/img/emmauskirche-02.jpg",
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
