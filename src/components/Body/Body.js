import { Card, Row, Col, CardTitle, CardBody, CardFooter, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import bike from '../../bike.jpg'

const Body = (props) => {
    return (
        <Row className="container">
            <Col>
                <Card color="white" className="shadow-lg my-1 mx-4 p-4" >
                    <CardBody className="m-auto">
                        <img src={bike} alt="profile" className="rounded-circle " width="300" height="300" />
                    </CardBody>
                    <CardTitle tag="h4" className="text-center my-4">Tushar Biswas</CardTitle>
                    <NavLink to="/logout" className="btn btn-outline-danger col-8 m-auto d-block pt-2 mb-5 mt-3 ">
                        <h6>Log Out</h6>
                    </NavLink>
                </Card>
            </Col>
            <Col className="mt-5">

                <Button size="lg" className="d-block m-auto my-5" color="light" outline>
                    Get a Doctor
                </Button>
                <Button size="lg" className=" d-block m-auto my-5" color="light" outline>
                    Request an Issue
                </Button>
            </Col>
        </Row>
    );
}

export default Body;