import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import Icon from "@mdi/react";
import {mdiClipboardList, mdiCurrencyUsd, mdiShipWheel} from "@mdi/js";
import React from "react";

const Minecraft = () => {
    return (
        <>
            <Container className={'container-home mb-5 vh-100'}>
                <Row className={'justify-content-center'}>
                    <Col md={10} lg={8}>
                        <div className="text-center">
                            <h1 className="custom-font-size mb-4">
                                <span className="fw-bold text-secondary">Minecraft</span><br/>
                                <span className="text-primary fw-bold"> Server hosting </span>
                            </h1>
                            <p className="text-dark custom-width mx-auto">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab asperiores delectus dolor ex fugiat ipsam iusto magnam magni,
                                maiores maxime molestiae necessitatibus neque odio odit officiis placeat, quibusdam
                                repellat, vero?</p>
                            <div className=''>
                                <Button variant="secondary" className="mx-2">Bekijk server hosting</Button>
                                <Button variant="light" className="mx-2">Lanceer jouw VPS</Button>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
};

export default Minecraft;