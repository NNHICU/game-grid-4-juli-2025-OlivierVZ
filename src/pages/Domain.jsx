import Container from "react-bootstrap/Container";
import {Col, Row, Form, Card} from "react-bootstrap";
import React from "react";
import Icon from '@mdi/react';
import { mdiShipWheel, mdiCurrencyUsd, mdiClipboardList } from '@mdi/js';

const Domain = () => {
    return (
        <>
            <Container className='container-home mb-5 vh-100'>
                <Row className='justify-content-center'>
                    <Col md={10} lg={8}>
                        <div className="text-center">
                            <h1 className="custom-font-size mb-4">
                                <span className="fw-bold text-secondary">Registreer</span><br/>
                                <span className="text-primary fw-bold">jouw Domain</span>
                            </h1>
                            <p className="text-dark custom-width mx-auto">
                                Dns-beheer, veel beschikbare TLD's en geweldige ondersteuning
                            </p>

                            <Form className="mt-4">
                                <Form.Control
                                    type="text"
                                    placeholder="registreer een domeinnaam..."
                                    className="mx-auto custom-width"
                                    aria-label="Zoek jouw domeinnaam"
                                />
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center align-items-center mt-5 g-3'>
                    <Col md={4}>
                        <Card className="h-100 p-2">
                            <Card.Body>
                                <Card.Title className='fw-bold'>Dns beheer</Card.Title>
                                <div className='d-flex flex-row align-items-center'>
                                    <Icon path={mdiShipWheel} size={3} color="#ffb900" />
                                    <Card.Text>
                                        Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 p-2">
                            <Card.Body>
                                <Card.Title className='fw-bold'>Eerlijke en betrouwbare Prijzen</Card.Title>
                                <div className='d-flex flex-row align-items-center'>
                                    <Icon path={mdiCurrencyUsd} size={3} color="#ffb900"/>
                                    <Card.Text>
                                        Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 p-2">
                            <Card.Body>
                                <Card.Title className='fw-bold'>21 beschikbare Tld</Card.Title>
                                <div className='d-flex flex-row align-items-center'>
                                    <Icon path={mdiClipboardList} size={3} color="#ffb900"/>
                                    <Card.Text>
                                        Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Domain;