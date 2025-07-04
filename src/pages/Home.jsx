import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import '../styles/home.scss'
import Cards from "../components/CardHome.jsx";
import React from "react";
import Icon from '@mdi/react';
import { mdiCogs, mdiBeach } from '@mdi/js';
import Footer from "../components/Footer.jsx";
const Home = () => {
    return (
        <>
            <Container className="container-home">
                <Row className='justify-content-center'>
                    <Col md={10} lg={8}>
                        <div className="text-center">
                            <h1 className="custom-font-size mb-4">
                                <span className="fw-bold text-secondary">De ultieme hosting</span><br/>
                                <span className="text-primary fw-bold"> voor jouw project</span>
                            </h1>
                            <p className="text-dark custom-width mx-auto">Lanceer vandaag nog jou Minecraft server of
                                VPS. Geniet van Geweldige
                                klanten service, fantastische prestaties en het beste controle paneel</p>
                            <div className=''>
                                <Button variant="secondary" className="mx-2">Bekijk server hosting</Button>
                                <Button variant="light" className="mx-2">Lanceer jouw VPS</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Cards/>
                    </Col>
                </Row>
                <Row className='g-5 p-3 align-items-center mt-5'>
                    <Col md={5}>
                        <Icon path={mdiCogs} size={1} /> <span className={'fw-bold'}>Beheren</span>
                        <h3 className='fw-bold'>In controle met ons fantastische paneel</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus enim et expedita illo iure molestias mollitia natus necessitatibus neque quo, repellat repudiandae, saepe tempora unde veniam vero? Incidunt, libero!</p>
                        <Button variant="outline-secondary">Bekijk de Demo →</Button>
                    </Col>
                    <Col md={7}>
                        <Image
                            fluid
                            src="/media/screen1.png"
                            alt="screen 1"
                        />

                    </Col>

                </Row>

                <Row className='g-5 p-3 align-items-center mt-5'>
                    <Col md={7}>
                        <Image
                            fluid
                            src="/media/screen2.png"
                            alt="screen 2"
                        />
                    </Col>
                    <Col md={5}>
                        <Icon path={mdiBeach} size={1} /> <span className={'fw-bold'}>Support</span>
                        <h3 className='fw-bold'>Krijg geweldige hulp van een team experts</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus enim et expedita illo iure molestias mollitia natus necessitatibus neque quo, repellat repudiandae, saepe tempora unde veniam vero? Incidunt, libero!</p>
                        <Button variant="outline-secondary">Bekijk de kennisbank →</Button>
                    </Col>
                </Row>
                <Row className='g-5 p-3 align-items-center mt-5'>

                    <Col md={6}>
                        <h3 className='fw-bold'>De beste minecraft server hosting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus enim et expedita illo iure molestias mollitia natus necessitatibus neque quo, repellat repudiandae, saepe tempora unde veniam vero? Incidunt, libero!</p>
                        <Button variant="outline-secondary">Bestel minecraft server hosting →</Button>
                    </Col>
                    <Col md={6}>
                        <Image
                            fluid
                            src="/media/minecraft2.png"
                            alt="screen 2"
                        />
                    </Col>
                </Row>
                <Row className='g-5 p-3 align-items-center mt-5'>
                    <Col md={4}>
                        <Card className="h-100 p-2">
                            <Card.Body>
                                <Card.Title className={'fw-bold'}>Minecraft Server</Card.Title>
                                <Card.Text>
                                    Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.
                                </Card.Text>
                                <Button variant="secondary w-100 ">Registreer jouw domein →</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 p-2">
                            <Card.Body>
                                <Card.Title className={'fw-bold'}>Virtual Private Server</Card.Title>
                                <Card.Text>
                                    Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.
                                </Card.Text>
                                <Button variant="secondary w-100 ">Registreer jouw domein →</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 p-2">
                            <Card.Body>
                                <Card.Title className={'fw-bold'}>Webhosting</Card.Title>
                                <Card.Text>
                                    Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.
                                </Card.Text>
                                <Button variant="secondary w-100 ">Registreer jouw domein →</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default Home;