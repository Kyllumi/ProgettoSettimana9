import { Row, Col, Button, Image } from 'react-bootstrap';
import propic from '../propic.jfif';
import paypal from '../paypal.png';

export default function MySettings() {
    return (
        <div className='w-75 mx-auto mySets fluid mb-5'>
            <h1 className="fw-normal border-bottom border-opacity-50 border-secondary my-3 p-3">Account</h1>
            <div>
                <Row>
                    <Col xs={3}>
                        <p className="text-secondary">MEMBERSHIP & BILLING</p>
                        <Button variant="light" className="text-black rounded-0">Cancel Membership</Button>
                    </Col>
                    <Col className="border-bottom border-opacity-50 border-secondary d-flex justify-content-between">
                        <div>
                            <p className="fw-bold mb-2">student@strive.school</p>
                            <p className="text-secondary mb-2">Password: **********</p>
                            <p className="text-secondary mb-2">Phone: 321 044 1279</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <a className="align-self-end" href="#a">Change account email</a>
                            <a className="align-self-end" href="#a">Change password</a>
                            <a className="align-self-end" href="#a">Change phone number</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}></Col>
                    <Col className="d-flex justify-content-between border-bottom border-opacity-50 border-secondary">
                        <div className="col py-3 d-flex align-items-center">
                            <Image src={paypal} alt="paypal" width="70" />
                            <p className="fw-bold mb-2 ms-2">admin@strive.school</p>
                        </div>
                        <div className="d-flex flex-column align-items-center py-3">
                            <a className="align-self-end" href="#a">Update payment info</a>
                            <a className="align-self-end" href="#a">Billing details</a>
                        </div>
                    </Col>
                </Row>
                <Row className="border-bottom border-opacity-50 border-secondary">
                    <Col xs={3}></Col>
                    <Col className="d-flex justify-content-between">
                        <div className="col"></div>
                        <div className="col d-flex flex-column align-items-center py-3">
                            <a className="align-self-end" href="#a">Redeem gift card or promo code</a>
                            <a className="align-self-end" href="#a">Where to buy gift cards</a>
                        </div>
                    </Col>
                </Row>
                <Row className="border-bottom border-opacity-50 border-secondary mt-3">
                    <Col xs={3}>
                        <p className="text-secondary">PLAN DETAILS</p>
                    </Col>
                    <Col className="d-flex justify-content-between">
                        <div className="col">
                            <p><span className="fw-bold">Premium</span> <span className="border border-3 p-1 rounded-2">ULTRA <span className="fw-bold">HD</span></span></p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <a className="align-self-end" href="#aa">Change plan</a>
                        </div>
                    </Col>
                </Row>
                <Row className="border-bottom border-opacity-50 border-secondary mt-3">
                    <Col xs={3}>
                        <p className="text-secondary">SETTINGS</p>
                    </Col>
                    <Col className="d-flex justify-content-between">
                        <div className="col d-flex flex-column mb-3">
                            <a href="#aa">Parental controls</a>
                            <a href="#aa">Test participation</a>
                            <a href="#aa">Manage download devices</a>
                            <a href="#aa">Activate a device</a>
                            <a href="#aa">Recent device streaming activity</a>
                            <a href="#aa">Sign out of all devices</a>
                        </div>
                        <div className="col"></div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={3}>
                        <p className="text-secondary">MY PROFILE</p>
                    </Col>
                    <Col className="d-flex justify-content-between">
                        <div className="col d-flex align-items-center">
                            <Image src={propic} alt="avatar" width="25" />
                            <p className="fw-bold ms-2 align-self-end">Strive Student</p>
                        </div>
                        <div className="col d-flex flex-column align-items-end">
                            <a href="#aa">Parental controls</a>
                            <a href="#aa">Test participation</a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3 mb-5">
                    <Col xs={3}></Col>
                    <Col className="d-flex justify-content-between">
                        <div className="col d-flex flex-column mb-3">
                            <a href="#aa">Language</a>
                            <a href="#aa">Payback settings</a>
                            <a href="#aa">Subtitle appearance</a>
                        </div>
                        <div className="col d-flex flex-column align-items-start ms-5">
                            <a href="#aa">Viewing activity</a>
                            <a href="#aa">Ratings</a>
                        </div>
                        <div className="col"></div>
                    </Col>
                </Row>
            </div>
        </div>
    )

}
