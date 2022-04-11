import { Card, CardBody, CardTitle, Col, CardText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Doctor = (props) => {
    console.log(props);
    return (
        <Col xl='4'>
            <Card color="white" className="shadow-lg mb-5 mx-4 p-4" >
                <CardBody className="m-auto">
                    <img src={props.doctor.profileImage} alt="profile" className="rounded-circle " width="300" height="300" />
                </CardBody>
                <CardTitle tag="h4" className="text-center">Tushar Biswas</CardTitle>
                <CardText className="text-center">
                    <strong>Age:</strong> {props.doctor.age}
                </CardText>
                <CardText className="text-center">
                    <strong>Role:</strong> {props.doctor.role}
                </CardText>
                <CardText className="text-center">
                    <strong>Chember:</strong> {props.doctor.chember}
                </CardText>
                <NavLink to="/" className=" d-block m-auto my-3 btn btn-outline-primary btn-lg px-3 pb-3 pt-2">Request an Issue</NavLink>
            </Card>
        </Col>
    );
}

export default Doctor;