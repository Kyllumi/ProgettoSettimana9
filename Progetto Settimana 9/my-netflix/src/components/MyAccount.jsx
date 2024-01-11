import React from 'react'
import propic from '../propic.jfif';
import { Container, Button, Row, Col, Dropdown, Form, ButtonGroup } from 'react-bootstrap'

export default function MyAccount() {
    return (
        <div className="text-white proPage">
            <Container id="editProfile">
                <h1 className="fw-normal border-bottom border-opacity-50 border-secondary my-3">Edit Profile</h1>
                <Row className="justify-content-start border-bottom border-opacity-50 border-secondary">
                    <Col xs={3}>
                        <Button variant="dark" className="position-relative p-0">
                            <img src={propic} alt="avatar" width="150" className="img-fluid" />
                        </Button>
                    </Col>

                    <Col>
                        <div className="border-bottom pb-3 border-secondary border-opacity-50">
                            <p className="bg-body-tertiary bg-opacity-50 p-2 fs-5">Strive Student</p>
                            <p className="m-1">Language:</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    English
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#">Italian</Dropdown.Item>
                                    <Dropdown.Item href="#">French</Dropdown.Item>
                                    <Dropdown.Item href="#">Japanese</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="border-bottom pb-3 border-secondary border-opacity-50 mt-3">
                            <p className="fs-5">Maturity Settings:</p>
                            <span className="bg-body-tertiary bg-opacity-25 p-1">ALL MATURITY RATINGS</span>
                            <p className="mt-3">Show titles of <span className="fw-bold">all maturity ratings</span> for this profile.</p>
                            <Button variant="dark" className="text-secondary border rounded-0 py-1 px-3">
                                EDIT
                            </Button>
                        </div>

                        <div className="pb-3 mt-3">
                            <p>Autoplay controls</p>
                            <Form.Check className="d-flex align-items-center">
                                <Form.Check.Input type="checkbox" className="bg-dark p-3 border me-2" checked />
                                <Form.Check.Label>Autoplay next episode in a series on all devices.</Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-flex align-items-center">
                                <Form.Check.Input type="checkbox" className="bg-dark p-3 border me-2" checked />
                                <Form.Check.Label>Autoplay previous while browsing on all devices.</Form.Check.Label>
                            </Form.Check>
                        </div>
                    </Col>
                </Row>
                <footer className="d-flex justify-content-center mt-3 mb-5">
                    <ButtonGroup aria-label="Profile actions">
                        <Button variant="light" className="text-black fw-bold border rounded-0 py-1 px-3">SAVE</Button>
                        <Button variant="dark" className="text-secondary border rounded-0 py-1 px-3 mx-3">CANCEL</Button>
                        <Button variant="dark" className="text-secondary border rounded-0 py-1 px-3">DELETE PROFILE</Button>
                    </ButtonGroup>
                </footer>
            </Container>
        </div>
    )
}
