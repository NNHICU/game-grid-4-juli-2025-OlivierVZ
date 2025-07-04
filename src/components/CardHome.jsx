import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

const HostingOptions = () => {
    return (
        <Container className="mt-5">
            <Row className="g-3">
                <Col md={4} className="d-flex flex-column">
                    <Card className="h-100 p-2">
                        <Card.Body>
                            <Card.Title>Minecraft server hosting</Card.Title>
                            <Card.Text>
                                Je eigen Minecraft server. Alle mods, versies en plugins. Java & Bedrock.
                            </Card.Text>
                            <Button variant="outline-secondary">Bestel jouw server →</Button>
                        </Card.Body>
                        <Card.Footer className="bg-white border-0">
                            <Card.Img src="/media/minecraft.webp" style={{ maxHeight: '150px', objectFit: 'contain' }} />
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md={8} className="">
                    <Row className="g-3 mb-3">
                        <Col md={12}>
                            <Card className="h-100 p-2">
                                <Card.Body className='flex-row'>
                                    <Row className="align-items-center">
                                        <Col md={9}>
                                            <Card.Title>Virtual private servers</Card.Title>
                                            <Card.Text>
                                                Schaalbare en krachtige VPS hosting voor elk project. Kies tussen AMD Ryzen 9 of Intel Xeon CPU's.
                                            </Card.Text>
                                            <Button variant="outline-secondary">Bestel jouw VPS →</Button>
                                        </Col>
                                        <Col md={3} className="text-end">
                                            <Image
                                                fluid
                                                className="rocketImage"
                                                src="/media/rocket.svg"
                                            />
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="g-3">
                        <Col md={6}>
                            <Card className="h-100 p-2">
                                <Card.Body>
                                    <Card.Title>Domeinnamen</Card.Title>
                                    <Card.Text>
                                        Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.
                                    </Card.Text>
                                    <Button variant="outline-secondary">Registreer jouw domein →</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="h-100 p-2">
                                <Card.Body>
                                    <Card.Title>Webhosting</Card.Title>
                                    <Card.Text>
                                        Onbeperkte webhosting. Kies je opslaglimiet en niets anders.
                                    </Card.Text>
                                    <Button variant="outline-secondary">Je website hosten →</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default HostingOptions;